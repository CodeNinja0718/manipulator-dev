import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import PaymentSvg from '@icons/icon_payment.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import { Radio, RadioGroup, Stack, Typography } from '@mui/material';
import AddCardFields from 'components/Card/AddCardFields';
import type { AddCardFormValues } from 'components/Card/AddCardFields/schema';
import schema from 'components/Card/AddCardFields/schema';
import { useFetch, useList, useMutate, useUser } from 'hooks';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import type { ICardItem } from 'models/card/interface';
import cardQuery from 'models/card/query';
import type { ICoupon } from 'models/discount/interface';
import discountQuery from 'models/discount/query';
import type {
  IManipulator,
  IReservationMenu,
  ITicket,
} from 'models/manipulator/interface';
import type { ITicketOfMenu, ITicketTime } from 'models/ticket/interface';
import ticketQuery from 'models/ticket/query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PAYMENT_MENU_TYPES, STEPPER_CONTENT } from 'utils/const';
import Helper from 'utils/helpers';

import CouponSelectModal from './CouponSelectModal';
import DetailMenu from './DetailMenu';
import MenuType from './MenuType';
import CouponType from './MenuType/CouponType';
import styles from './styles';

interface BookingPaymentProps {
  selectedMenu?: IReservationMenu;
  startTime?: string;
  endTime?: string;
  handleChangeStep: (step: string) => void;
  onSubmit: (values: Record<string, unknown>, onFailure?: () => void) => void;
  ticketMenu: ITicket | any;
  ticketTimeList: ITicketTime[];
  manipulatorData: IManipulator | any;
}

const BookingPayment: React.FC<BookingPaymentProps> = ({
  selectedMenu,
  startTime,
  endTime,
  handleChangeStep,
  onSubmit,
  ticketMenu,
  ticketTimeList,
  manipulatorData,
}) => {
  const { data: currentUser, isFetching } = useUser();
  const { data: cardList, isLoading: isLoadingCard } = useFetch<{
    items: ICardItem[];
  }>({
    ...cardQuery.cardList,
    enabled: !!currentUser,
  });

  const { list: privateCouponsList = [], isLoading: isPrivateCouponLoading } =
    useList<ICoupon>({
      ...discountQuery.getDiscounts({
        type: 'Private',
      }),
    });

  const { list: publicCouponsList = [], isLoading: isPublicCouponLoading } =
    useList<ICoupon>({
      ...discountQuery.getDiscounts({
        type: 'Public',
      }),
    });

  const [payment, setPayment] = useState(cardList?.items[0]?.id);
  const selectedMenuType = ticketMenu?.ticket?.numberOfSelectedTicket
    ? PAYMENT_MENU_TYPES.TICKET
    : PAYMENT_MENU_TYPES.COUPON;

  const [couponSelectVisible, setCouponSelectVisibility] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<ICoupon | undefined>(
    undefined,
  );

  const { mutateAsync: getCardToken, isLoading: isGettingToken } = useMutate<
    AddCardFormValues,
    { token: string }
  >(cardQuery.getCardToken);
  const { mutateAsync: addCard, isLoading: isAddingCard } = useMutate<{
    token: string;
    type: string;
  }>({ ...cardQuery.addCard, successMessage: undefined });
  const [isSubmit, setIsSubmit] = useState(false);

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

  const onCouponSelect = (code: string) => {
    const currentCoupon = [...privateCouponsList, ...publicCouponsList].find(
      (item) => item.code === code,
    );

    if (currentCoupon) {
      setSelectedCoupon(currentCoupon);
    }
    setCouponSelectVisibility(false);
  };

  const handleSubmit = async () => {
    setIsSubmit(true);
    try {
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
        onSubmit(
          {
            paymentMethod: payment,
            coupon: selectedCoupon,
            selectedMenuType,
          },
          () => {
            setIsSubmit(false);
          },
        );
      }
    } catch {
      setIsSubmit(false);
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

  const { data } = useFetch<ITicketOfMenu>(
    ticketQuery.getInfoOfTicket(
      ticketMenu?.createdById,
      ticketMenu?._id,
      selectedMenuType === PAYMENT_MENU_TYPES.TICKET,
      currentUser?._id,
    ),
  );

  const currentTicketMenu = data
    ? {
        ...ticketMenu,
        ticket: {
          ...ticketMenu?.ticket,
          manipulatorName: manipulatorData?.name || data?.manipulatorName,
          salonName: data?.salonName,
          availableCount: data?.ticket?.availableCount,
          expiredAt: data?.ticket?.expiredAt,
        },
      }
    : ticketMenu;

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
        ticketMenu={currentTicketMenu}
        ticketsTimeList={ticketTimeList}
      />

      <Typography fontSize={14} color="black">
        ※当日、整体院でメニュー変更できます。
        <br />
        ※料金はメニュー変更・オプション追加によって変動する場合があります。
      </Typography>

      {selectedMenuType === PAYMENT_MENU_TYPES.TICKET ? (
        <MenuType ticketMenu={currentTicketMenu} />
      ) : (
        <CouponType
          onSelectCoupon={setCouponSelectVisibility}
          coupon={selectedCoupon}
          onSetCouponSelect={setSelectedCoupon}
        />
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
          (!isEmpty(cardList?.items) && !payment) ||
          isSubmit
        }
        loading={isGettingToken || isAddingCard}
        onClick={handleSubmit}
      >
        予約を確定する
      </LoadingButton>
      {couponSelectVisible && (
        <CouponSelectModal
          visible={couponSelectVisible}
          isLoading={isPrivateCouponLoading || isPublicCouponLoading}
          currentSelectedCouponCode={selectedCoupon?.code}
          privateCoupons={privateCouponsList}
          publicCoupons={publicCouponsList}
          onClose={() => {
            setCouponSelectVisibility(false);
          }}
          onSubmit={onCouponSelect}
        />
      )}
    </Stack>
  );
};

export default BookingPayment;
