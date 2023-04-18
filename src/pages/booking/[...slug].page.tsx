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
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import type { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { STEPPER_CONTENT } from 'utils/const';
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
      startTime: dayjs().tz().startOf('day').toISOString(),
      endTime: dayjs().tz().startOf('day').add(7, 'day').toISOString(),
    }),
    enabled: false,
    staleTime: 1000 * 60 * 2,
  });
  const { data: manipulatorMenus } = useFetch<{ docs: IReservationMenu[] }>({
    ...manipulatorQuery.manipulatorMenus(manipulatorId),
    enabled: false,
    staleTime: 1000 * 60 * 2,
  });

  const [overviewBooking, setOverviewBooking] = useState({});
  const { booking, setBooking, setConfirmModal, setRedirectLogin } =
    useGlobalState();

  // Manipulator Menu List
  const manipulatorMenuList = useMemo(() => {
    let result = manipulatorMenus?.docs || [];

    if (!isEmpty(result)) {
      result = result.map((item) => {
        return {
          ...item,
          ticket:
            booking?.menuId === item?._id
              ? {
                  ...booking?.ticket,
                }
              : item?.ticket,
        };
      });
    }
    return result;
  }, [booking, manipulatorMenus?.docs]);

  useEffect(() => {
    if (booking?.menuId) {
      const currentTicketMenu = manipulatorMenuList.filter(
        (item) => item._id === booking?.menuId,
      );
      setTicketMenu(currentTicketMenu?.[0]);
    }
  }, [booking, manipulatorMenuList]);

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
    }
  > = {
    menu: {
      href: `/manipulator/${manipulatorId}`,
      shallow: false,
      content: '整体師詳細に戻る',
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

  const handleSubmitStep = (values: CreateReservationPayload) => {
    if (step === STEPPER_CONTENT[2].value && values.paymentMethod) {
      createReservation(
        {
          ...booking,
          ...values,
          manipulatorId,
        },
        {
          onSuccess: () => {
            setOverviewBooking({
              ...booking,
              menu: selectedMenu,
            });
            setBooking({});
          },
        },
      );
    }
    if (
      step === STEPPER_CONTENT[1].value &&
      values.startTime &&
      values.endTime
    ) {
      setConfirmModal({
        title: '予約日時の確認',
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
      const data = ticketMenu?._id
        ? { ...booking, ...currentValue }
        : omit({ ...booking, ...currentValue }, 'ticket');
      setBooking(data);
      handleChangeStep(STEPPER_CONTENT[1].value);
    }
  };

  const renderStepContent = () => {
    if (step === STEPPER_CONTENT[2].value) {
      return (
        <BookingPayment
          selectedMenu={selectedMenu}
          ticketMenu={ticketMenu}
          startTime={booking?.startTime}
          endTime={booking?.endTime}
          handleChangeStep={handleChangeStep}
          onSubmit={handleSubmitStep}
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
        />
      );
    }
    return (
      <BookingMenuSelection
        initialMenu={ticketMenu?.ticket?.id || booking.menuId || ''}
        menus={manipulatorMenuList || []}
        ticketMenu={ticketMenu}
        onSubmit={handleSubmitStep}
        onSetTicketMenu={setTicketMenu}
      />
    );
  };

  if (isSuccess) {
    return (
      <BookingOverview
        manipulatorDetail={manipulatorTimeSlots?.manipulator}
        bookingDetail={overviewBooking}
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
          data={manipulatorTimeSlots?.manipulator}
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
      ...manipulatorQuery.manipulatorTimeSlots({
        manipulatorId,
        startTime: dayjs().tz().startOf('day').toISOString(),
        endTime: dayjs().tz().startOf('day').add(7, 'day').toISOString(),
      }),
      staleTime: 1000 * 60 * 2,
    });
    await fetchData({
      ...manipulatorQuery.manipulatorMenus(manipulatorId),
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
