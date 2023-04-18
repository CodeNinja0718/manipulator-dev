import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import PaymentSvg from '@icons/icon_payment.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import { Radio, RadioGroup, Stack, Typography } from '@mui/material';
import AddCardFields from 'components/Card/AddCardFields';
import type { AddCardFormValues } from 'components/Card/AddCardFields/schema';
import schema from 'components/Card/AddCardFields/schema';
import { useFetch, useMutate, useUser } from 'hooks';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import type { ICardItem } from 'models/card/interface';
import cardQuery from 'models/card/query';
import type { IReservationMenu, ITicket } from 'models/manipulator/interface';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PAYMENT_MENU_TYPES, STEPPER_CONTENT } from 'utils/const';
import Helper from 'utils/helpers';

import DetailMenu from './DetailMenu';
import MenuType from './MenuType';
import styles from './styles';

interface BookingPaymentProps {
  selectedMenu?: IReservationMenu;
  startTime?: string;
  endTime?: string;
  handleChangeStep: (step: string) => void;
  onSubmit: (values: Record<string, unknown>) => void;
  ticketMenu: ITicket | any;
}

const BookingPayment: React.FC<BookingPaymentProps> = ({
  selectedMenu,
  startTime,
  endTime,
  handleChangeStep,
  onSubmit,
  ticketMenu,
}) => {
  const { data: currentUser, isFetching } = useUser();
  const { data: cardList, isLoading: isLoadingCard } = useFetch<{
    items: ICardItem[];
  }>({
    ...cardQuery.cardList,
    enabled: !!currentUser,
  });
  const [payment, setPayment] = useState(cardList?.items[0]?.id);
  const [selectedMenuType, setSelectedMenuType] = useState(
    PAYMENT_MENU_TYPES.TICKET,
  );

  const { mutateAsync: getCardToken, isLoading: isGettingToken } = useMutate<
    AddCardFormValues,
    { token: string }
  >(cardQuery.getCardToken);
  const { mutateAsync: addCard, isLoading: isAddingCard } = useMutate<{
    token: string;
    type: string;
  }>({ ...cardQuery.addCard, successMessage: undefined });

  const {
    control,
    getValues,
    reset,
    formState: { isValid },
  } = useForm<AddCardFormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const handleChangePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(event.target.value);
  };

  const handleSubmit = async () => {
    if (isEmpty(cardList?.items)) {
      const values = getValues();
      const data = await getCardToken({
        ...values,
        card_number: values.card_number.trim(),
        security_code: values.security_code.trim(),
      });
      addCard(
        { token: data.token, type: 'CARD' },
        {
          onSuccess: (response) => {
            reset();
            onSubmit({
              paymentMethod: get(response, 'items[0].id'),
            });
          },
        },
      );
    } else {
      onSubmit({
        paymentMethod: payment,
      });
    }
  };

  useEffect(() => {
    if (isEmpty(selectedMenu)) {
      handleChangeStep(STEPPER_CONTENT[0].value);
    } else if (!startTime || !endTime || (!isFetching && !currentUser)) {
      handleChangeStep(STEPPER_CONTENT[1].value);
    }
  }, [
    currentUser,
    endTime,
    handleChangeStep,
    isFetching,
    selectedMenu,
    startTime,
  ]);

  useEffect(() => {
    if (!isEmpty(cardList?.items)) {
      setPayment(cardList?.items[0]?.id);
    }
  }, [cardList?.items]);

  return (
    <Stack sx={styles.bookingPaymentWrapper}>
      <Typography color="secondary" fontSize={18} fontWeight="bold">
        予約内容をご確認ください
      </Typography>

      {/* Menu detail Info */}
      <DetailMenu
        startTime={startTime}
        endTime={endTime}
        selectedMenu={selectedMenu}
        ticketMenu={ticketMenu}
      />

      <Typography fontSize={14} color="black">
        ※当日、整体院でメニュー変更できます。
        <br />
        ※料金はメニュー変更・オプション追加によって変動する場合があります。
      </Typography>

      {!isEmpty(ticketMenu) ? (
        <MenuType
          ticketMenu={ticketMenu}
          selectedMenuType={selectedMenuType}
          onSetSelectedMenuType={setSelectedMenuType}
        />
      ) : (
        <></>
      )}

      <Stack sx={styles.selectPaymentWrapper}>
        <Typography
          color="secondary"
          fontSize={18}
          fontWeight="bold"
          mb={16}
          sx={styles.paymentTitle}
        >
          <PaymentSvg /> 支払い方法
        </Typography>
        {isEmpty(cardList?.items) && !isLoadingCard ? (
          <>
            <Image
              src="/images/card_brand.webp"
              alt="Card support"
              width={260}
              height={31}
            />
            <Typography color="black" sx={styles.paymentNote}>
              <span>
                ご予約時に与信枠（お支払い枠）を確保し、施術後に決済が行われます。
              </span>
              <br />
              ※当日の金額変更も可能です。
            </Typography>
            <AddCardFields control={control} />
            <Typography>
              ※セキュリティコードとは裏面の署名欄に印字されている3桁の番号のことです
            </Typography>
          </>
        ) : (
          <RadioGroup
            sx={styles.cardListWrapper}
            value={payment}
            onChange={handleChangePayment}
          >
            {cardList?.items.map((item) => (
              <Stack
                direction="row"
                alignItems="center"
                className="card-info"
                data-selected={item.id === payment}
                key={item.id}
                component="label"
              >
                <Radio
                  value={item.id}
                  checked={item.id === payment}
                  sx={styles.radioBtn}
                />
                <Stack
                  ml={8}
                  sx={{ width: '100%' }}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <Typography>
                    {item?.details?.brand.toUpperCase()}
                    &nbsp;&nbsp;&nbsp;
                    {Helper.formatCardNumberText(item?.details?.lastNumber)}
                  </Typography>
                  <Typography fontSize={14}>
                    有効期限：{item?.details?.expireMonth}/
                    {item?.details?.expireYear}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </RadioGroup>
        )}
      </Stack>
      {/* <Typography sx={styles.cancelDate}>
        <span>キャンセル料発生日</span>
        {startTimeDayjs.add(-3, 'day').format('YYYY/MM/DD（ddd）')}
      </Typography>
      <Typography sx={styles.cancelNote}>
        ボタンをタップして予約を送信することにより、キャンセルポリシーに同意したものとみなされます
      </Typography> */}
      <LoadingButton
        fullWidth
        variant="contained"
        endIcon={<ArrowRight />}
        sx={styles.submitBtn}
        disabled={
          (isEmpty(cardList?.items) && !isValid) ||
          (!isEmpty(cardList?.items) && !payment)
        }
        loading={isGettingToken || isAddingCard}
        onClick={handleSubmit}
      >
        予約を確定する
      </LoadingButton>
    </Stack>
  );
};

export default BookingPayment;
