import ArrowRight from '@icons/arrow-right.svg';
import { LoadingButton } from '@mui/lab';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { Select } from 'components/Form';
import type { IManipulator } from 'models/manipulator/interface';
import type { IAvailableTicket } from 'models/ticket/interface';
import React, { useMemo, useState } from 'react';
import type { Control, FieldValues } from 'react-hook-form';
import { useWatch } from 'react-hook-form';

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
  manipulator: Partial<IManipulator>;
  isLoading?: boolean;
  onSubmit: (payment: string) => void;
}

const AddTicketForm = ({
  control,
  ticketsList,
  manipulator,
  isLoading,
  onSubmit,
}: AddTicketFormProps) => {
  const [payment, setPayment] = useState<string | undefined>(undefined);

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

  const handleSubmit = () => {
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
      <CardSelect payment={payment} setPayment={setPayment} />

      <Box display={'flex'} justifyContent={'center'} mt={32}>
        <LoadingButton
          size="medium"
          color="primary"
          variant="contained"
          type="submit"
          endIcon={<ArrowRight />}
          loadingPosition="end"
          sx={styles.submitBtn}
          onClick={handleSubmit}
        >
          回数券を購入する
        </LoadingButton>
      </Box>
    </Stack>
  );
};

export default AddTicketForm;
