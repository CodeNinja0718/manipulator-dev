import ArrowLeftIcon from '@icons/arrow-left.svg';
import { Box, Stack } from '@mui/material';
import { dehydrate } from '@tanstack/react-query';
import SlotConfirmContent from 'components/Booking/SlotSelection/ConfirmContent';
import Stepper from 'components/Booking/Stepper';
import Layout from 'components/Layout';
import Link from 'components/Link';
import ManipulatorSummaryInfo from 'components/Manipulator/SummaryInfo';
import dayjs from 'dayjs';
import { useFetch, useGlobalState, useMutate, useUser } from 'hooks';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import type {
  IManipulator,
  IReservationMenu,
  ITicket,
} from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import type { CreateReservationPayload } from 'models/reservation/interface';
import reservationQuery from 'models/reservation/query';
import type { ITicketTime } from 'models/ticket/interface';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import type { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import type { MouseEventHandler } from 'react';
import { useMemo, useState } from 'react';
import { PAYMENT_MENU_TYPES, STEPPER_CONTENT } from 'utils/const';
import queryClient, { fetchData } from 'utils/queryClient';

import styles from './styles';

const BookingSlotSelection = dynamic(
  () => import('components/Booking/SlotSelection'),
);
const BookingMenuSelection = dynamic(
  () => import('components/Booking/MenuSelection'),
);
const BookingPayment = dynamic(() => import('components/Booking/Payment'));
const BookingOverview = dynamic(() => import('components/Booking/Overview'));

const calculateTicketTimes = (
  numberOfTickets: number,
  startTime: string | undefined,
  endTime: string | undefined,
  estimatedTime: number = 0,
) => {
  if (numberOfTickets <= 0 || !startTime || !endTime) {
    return [];
  }

  const startTimeDayjs = dayjs(startTime).tz();

  const tickets: ITicketTime[] = [];

  for (let i = 0; i < numberOfTickets; i += 1) {
    const lastTicket = tickets.length ? tickets[tickets.length - 1] : undefined;
    const initStartTime = lastTicket?.endTime || startTimeDayjs;
    const initEndTime = initStartTime.add(estimatedTime, 'minute');

    tickets.push({ startTime: initStartTime, endTime: initEndTime });
  }

  return tickets;
};

const BookingPage = () => {
  const { data: currentUser } = useUser();

  const router = useRouter();
  const { slug } = router.query;
  const manipulatorId = slug![0] || '';
  const step = slug![1] || STEPPER_CONTENT[0].value;
  const [ticketMenu, setTicketMenu] = useState<ITicket | any>({});

  const { mutateAsync: createReservation, isSuccess } = useMutate(
    reservationQuery.createReservation,
  );
  const { data: manipulatorTimeSlots } = useFetch<{
    manipulator: IManipulator;
    availableSlots: string[];
  }>({
    ...manipulatorQuery.manipulatorTimeSlots({
      manipulatorId,
      date: dayjs().tz().startOf('day').toISOString(),
    }),
    enabled: false,
    staleTime: 1000 * 60 * 2,
  });
  const { data: manipulatorMenus } = useFetch<{ docs: IReservationMenu[] }>(
    manipulatorQuery.manipulatorMenus(manipulatorId),
  );

  const { data: manipulatorData } = useFetch<IManipulator>({
    ...manipulatorQuery.detailManiplator(manipulatorId),
    enabled: false,
  });

  const [overviewBooking, setOverviewBooking] = useState<
    CreateReservationPayload & {
      menu?: IReservationMenu;
    }
  >({});
  const { booking, setBooking, setConfirmModal, setRedirectLogin } =
    useGlobalState();

  // Manipulator Menu List
  const manipulatorMenuList = useMemo(() => {
    const result = manipulatorMenus?.docs || [];
    return result;
  }, [manipulatorMenus?.docs]);

  const selectedMenu = manipulatorMenuList?.find(
    (menu) => menu._id === booking.menuId,
  );

  const backNavigateContent: Record<
    string,
    {
      href: LinkProps['href'];
      shallow?: boolean;
      replace?: boolean;
      content: string;
      onClick?: MouseEventHandler<HTMLAnchorElement>;
    }
  > = {
    menu: {
      href: `/manipulator/${manipulatorId}`,
      shallow: false,
      content: '整体師詳細に戻る',
      onClick: (event) => {
        event.preventDefault();
        router.back();
      },
    },
    slot: {
      href: {
        pathname: router.pathname,
        query: {
          slug: [manipulatorId, STEPPER_CONTENT[0].value],
        },
      },
      replace: true,
      shallow: true,
      content: 'メニュー選択に戻る',
      onClick: (event) => {
        if (router.query.ticketId) {
          event.preventDefault();
          router.back();
        }
      },
    },
    confirm: {
      href: {
        pathname: router.pathname,
        query: {
          slug: [manipulatorId, STEPPER_CONTENT[1].value],
        },
      },
      replace: true,
      shallow: true,
      content: '日時選択に戻る',
    },
  };

  const handleChangeStep = (nextStep: string) => {
    router.replace({
      pathname: router.pathname,
      query: {
        slug: [manipulatorId, nextStep],
      },
    });
  };

  const handleSubmitStep = (
    values: CreateReservationPayload,
    onFailure?: () => void,
  ) => {
    if (step === STEPPER_CONTENT[2].value && values.paymentMethod) {
      let params = omit(booking, 'ticket', 'couponCode');
      const ticketParams =
        !isEmpty(booking?.ticket) &&
        values.selectedMenuType === PAYMENT_MENU_TYPES.TICKET
          ? {
              ticketId: booking?.ticket?.id,
              ticketUse: booking?.ticket?.numberOfSelectedTicket,
            }
          : {};
      const couponParams =
        !isEmpty(values?.coupon) &&
        values.selectedMenuType === PAYMENT_MENU_TYPES.COUPON
          ? {
              couponCode: values.coupon.code,
            }
          : {};

      params = {
        ...params,
        ...ticketParams,
        ...couponParams,
        manipulatorId,
        paymentMethod: values.paymentMethod,
      };

      createReservation(params, {
        onSuccess: () => {
          setOverviewBooking({
            ...omit(
              booking,
              values.selectedMenuType !== PAYMENT_MENU_TYPES.TICKET
                ? ['ticket']
                : [],
            ),
            menu: selectedMenu,
            coupon: values.coupon,
          });
          setBooking({});
        },
        onError: onFailure,
      });
    }
    if (
      step === STEPPER_CONTENT[1].value &&
      values.startTime &&
      values.endTime
    ) {
      setConfirmModal({
        title: '予約日時の確認',
        confirmText: '次に進む',
        content: (
          <SlotConfirmContent
            isGuest={!currentUser}
            startTime={values.startTime}
            endTime={values.endTime}
            onConfirm={() => {
              setRedirectLogin(`/booking/${manipulatorId}/confirm`);
              setBooking({ ...booking, ...values });
            }}
          />
        ),
        hideActions: !currentUser,
        onConfirm: () => {
          if (currentUser) {
            setBooking({ ...booking, ...values });
            handleChangeStep(STEPPER_CONTENT[2].value);
          }
        },
      });
    }
    if (
      step === STEPPER_CONTENT[0].value &&
      (values.menuId || ticketMenu?._id)
    ) {
      const currentValue = ticketMenu?._id
        ? { ...values, menuId: ticketMenu?._id, ticket: ticketMenu?.ticket }
        : { ...values };
      let data = ticketMenu?._id
        ? { ...booking, ...currentValue }
        : omit({ ...booking, ...currentValue }, 'ticket');

      data = ticketMenu?.ticket?.numberOfSelectedTicket
        ? data
        : omit(data, ['ticket']);

      setBooking(data);
      handleChangeStep(STEPPER_CONTENT[1].value);
    }
  };

  const handleInitTicketBookingReq = (
    values: Record<string, string>,
    onFailure: () => void,
  ) => {
    const { ticketId, ticketUse } = values;

    const reqMenu = manipulatorMenuList.find(
      (menu) => menu.ticket?.id === ticketId,
    );

    if (reqMenu) {
      const reqTicket = {
        ...reqMenu.ticket,
        numberOfSelectedTicket: Number((ticketUse || 1) as string),
      };
      setBooking({ menuId: reqMenu._id, ticket: reqTicket });
      setTicketMenu({
        ...omit(reqMenu, ['ticket']),
        ticket: reqTicket,
      });
    } else {
      onFailure();
    }
  };

  const handleAddTicket = (ticketId: string) => {
    if (!currentUser) {
      router.push({
        pathname: '/login',
      });
      return;
    }

    router.push({
      pathname: '/booking/add-ticket',
      query: {
        slug: [manipulatorId, ticketId],
        href: router.pathname,
      },
    });
  };

  const renderStepContent = () => {
    if (step === STEPPER_CONTENT[2].value) {
      const tickets = calculateTicketTimes(
        ticketMenu?.ticket?.numberOfSelectedTicket || 0,
        booking?.startTime,
        booking?.endTime,
        ticketMenu?.estimatedTime || 0,
      );
      return (
        <BookingPayment
          selectedMenu={selectedMenu}
          ticketMenu={ticketMenu}
          startTime={booking?.startTime}
          endTime={booking?.endTime}
          handleChangeStep={handleChangeStep}
          onSubmit={handleSubmitStep}
          ticketTimeList={tickets}
          manipulatorData={manipulatorData}
        />
      );
    }
    if (step === STEPPER_CONTENT[1].value) {
      return (
        <BookingSlotSelection
          selectedMenu={selectedMenu}
          handleChangeStep={handleChangeStep}
          onSubmit={handleSubmitStep}
          ticketMenu={ticketMenu}
          onInitTicketBooking={handleInitTicketBookingReq}
        />
      );
    }

    return (
      <BookingMenuSelection
        initialMenu={
          ticketMenu?.ticket?.numberOfSelectedTicket
            ? ticketMenu?.ticket?.id
            : ticketMenu?._id || ''
        }
        menus={manipulatorMenuList || []}
        ticketMenu={ticketMenu}
        onSubmit={handleSubmitStep}
        onSetTicketMenu={setTicketMenu}
        onAddTicket={handleAddTicket}
        currentUser={currentUser}
      />
    );
  };

  if (isSuccess) {
    const tickets = calculateTicketTimes(
      overviewBooking?.ticket?.numberOfSelectedTicket || 0,
      overviewBooking?.startTime,
      overviewBooking?.endTime,
      overviewBooking?.menu?.estimatedTime || 0,
    );
    return (
      <BookingOverview
        manipulatorDetail={manipulatorTimeSlots?.manipulator}
        bookingDetail={overviewBooking}
        ticketTimeList={tickets}
      />
    );
  }

  return (
    <Box sx={styles.bookingPageWrapper}>
      <Link
        href={backNavigateContent[step]?.href || ''}
        shallow={backNavigateContent[step]?.shallow}
        replace={backNavigateContent[step]?.replace}
        sx={styles.backNavigate}
        onClick={backNavigateContent[step]?.onClick}
      >
        <ArrowLeftIcon />
        {backNavigateContent[step]?.content}
      </Link>
      <Stack
        direction="row"
        gap={{ xs: 32, tablet: 40 }}
        sx={styles.bookingContentWrapper}
      >
        <ManipulatorSummaryInfo
          data={manipulatorData}
          className="manipulator-info"
        />
        <Stack className="step-content">
          <Stepper currentStep={step} onChangeStep={handleChangeStep} />
          {renderStepContent()}
        </Stack>
      </Stack>
    </Box>
  );
};

BookingPage.getLayout = (page: React.ReactNode) => {
  return <Layout isCardLayout>{page}</Layout>;
};

const STEPPER_VALUES: string[] = STEPPER_CONTENT.map(
  (content) => content.value,
);
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug } = query;
    const manipulatorId = slug![0] || '';
    const step = slug![1] || STEPPER_CONTENT[0].value;

    if (!STEPPER_VALUES.includes(step)) {
      return {
        notFound: true,
      };
    }

    await fetchData({
      ...manipulatorQuery.manipulatorMenus(manipulatorId),
      staleTime: 1000 * 60 * 2,
    });

    await fetchData({
      ...manipulatorQuery.detailManiplator(manipulatorId),
      staleTime: 1000 * 60 * 2,
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default BookingPage;
