import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import { LoadingButton } from '@mui/lab';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import type { AddCardFormValues } from 'components/Card/AddCardFields/schema';
import schema from 'components/Card/AddCardFields/schema';
import { Select } from 'components/Form';
import { useMutate } from 'hooks';
import isEmpty from 'lodash/isEmpty';
import type { ICardItem } from 'models/card/interface';
import cardQuery from 'models/card/query';
import type { IManipulator } from 'models/manipulator/interface';
import type { IAvailableTicket } from 'models/ticket/interface';
import React, { useMemo, useState } from 'react';
import type { Control, FieldValues } from 'react-hook-form';
import { useForm, useWatch } from 'react-hook-form';

import CardSelect from './CardSelect';
import styles from './styles';
import TicketReview from './TicketReview';

interface ITicketSelectItem extends IAvailableTicket {
  id: string;
  name: string;
}

interface AddTicketFormProps {
  control: Control<FieldValues, any>;
  ticketsList: IAvailableTicket[];
  cardList: ICardItem[];
  isCardListLoading: boolean;
  manipulator: Partial<IManipulator>;
  isLoading?: boolean;
  isSubmitLoading?: boolean;
  onSubmit: (payment: string) => void;
}

const AddTicketForm = ({
  control,
  ticketsList,
  cardList,
  isCardListLoading,
  manipulator,
  isLoading,
  isSubmitLoading,
  onSubmit,
}: AddTicketFormProps) => {
  const { mutateAsync: getCardToken, isLoading: isGettingToken } = useMutate<
    AddCardFormValues,
    { token: string }
  >(cardQuery.getCardToken);
  const { mutateAsync: addCard, isLoading: isAddingCard } = useMutate<{
    token: string;
    type: string;
  }>({ ...cardQuery.addCard, successMessage: undefined });

  const [payment, setPayment] = useState<string | undefined>(undefined);

  const {
    control: cardControl,
    getValues,
    reset,
    formState: { isValid },
  } = useForm<AddCardFormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const selectedTicketId = useWatch({
    control,
    name: 'ticketId',
    defaultValue: '',
  });

  const selectedTicket = useMemo(
    () => ticketsList.find((t) => t.ticketId === selectedTicketId),
    [selectedTicketId, ticketsList],
  );

  const dataList: ITicketSelectItem[] = useMemo(
    () =>
      ticketsList.map((item) => ({
        ...item,
        id: item.ticketId,
        name: `${item.ticketName} (目安時間：${item.estimatedTime}分)`,
      })),
    [ticketsList],
  );

  const handleSubmit = async () => {
    if (isEmpty(cardList)) {
      const values = getValues();
      const data = await getCardToken({
        ...values,
        card_number: values.card_number.trim(),
        security_code: values.security_code.trim(),
      });
      addCard(
        { token: data.token, type: 'CARD' },
        {
          onSuccess: (response: any) => {
            reset();
            onSubmit(response?.items[0]?.id || '');
          },
        },
      );
    }

    if (!payment) {
      return;
    }

    onSubmit(payment);
  };

  if (isLoading) {
    return (
      <Stack
        display={'flex'}
        alignSelf={'stretch'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <Stack sx={styles.couponFormContainer} pt={60} display={'flex'}>
      <Select
        label="メニューを選択してください"
        placeholder="メニューを選択してください"
        name="ticketId"
        control={control}
        data={dataList}
        required
      />
      <Typography fontSize={14} fontWeight={'bold'}>
        ※補足テキスト欄（不要であれば削除）
      </Typography>
      <TicketReview ticketData={selectedTicket} manipulator={manipulator} />
      <CardSelect
        payment={payment}
        setPayment={setPayment}
        cardList={cardList}
        isLoading={isCardListLoading}
        control={cardControl}
      />
      <Box display={'flex'} justifyContent={'center'} mt={32}>
        <LoadingButton
          size="medium"
          color="primary"
          variant="contained"
          type="submit"
          endIcon={<ArrowRight />}
          loadingPosition="end"
          sx={styles.submitBtn}
          disabled={
            (isEmpty(cardList) && !isValid) || (!isEmpty(cardList) && !payment)
          }
          loading={isGettingToken || isAddingCard || isSubmitLoading}
          onClick={handleSubmit}
        >
          回数券を購入する
        </LoadingButton>
      </Box>
    </Stack>
  );
};

export default AddTicketForm;
