import ArrowLeftIcon from '@icons/arrow-left.svg';
import { Box, Stack } from '@mui/material';
import { dehydrate } from '@tanstack/react-query';
import Stepper from 'components/Booking/Stepper';
import Layout from 'components/Layout';
import Link from 'components/Link';
import ManipulatorSummaryInfo from 'components/Manipulator/SummaryInfo';
import dayjs from 'dayjs';
import { useFetch, useGlobalState, useMutate } from 'hooks';
import type {
  IManipulator,
  IReservationMenu,
} from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import reservationQuery from 'models/reservation/query';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import type { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { STEPPER_CONTENT } from 'utils/const';
import queryClient, { fetchData } from 'utils/queryClient';

import styles from './styles';

const BookingSlotSelection = dynamic(
  () => import('components/Booking/SlotSelection'),
);
const BookingMenuSelection = dynamic(
  () => import('components/Booking/MenuSelection'),
);
const BookingOverview = dynamic(() => import('components/Booking/Overview'));

const BookingPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const manipulatorId = slug![0] || '';
  const step = slug![1] || STEPPER_CONTENT[0].value;

  const { mutateAsync: createReservation } = useMutate(
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

  const { booking, setBooking } = useGlobalState();
  const selectedMenu = manipulatorMenus?.docs.find(
    (menu) => menu._id === booking.menuId,
  );

  const backNavigateContent: Record<
    string,
    {
      href: LinkProps['href'];
      shallow: boolean;
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
      shallow: true,
      content: 'メニュー選択に戻る',
    },
    overview: {
      href: {
        pathname: router.pathname,
        query: {
          slug: [manipulatorId, STEPPER_CONTENT[1].value],
        },
      },
      shallow: true,
      content: '日時選択に戻る',
    },
  };

  const handleChangeStep = (nextStep: string) => {
    router.push({
      pathname: router.pathname,
      query: {
        slug: [manipulatorId, nextStep],
      },
    });
  };

  const handleSubmitStep = (value: Record<string, unknown>) => {
    if (step === STEPPER_CONTENT[2].value) {
      createReservation({
        ...booking,
        ...value,
        manipulatorId,
      });
    }
    if (step === STEPPER_CONTENT[1].value) {
      setBooking({ ...booking, ...value });
      handleChangeStep(STEPPER_CONTENT[2].value);
    }
    if (step === STEPPER_CONTENT[0].value) {
      setBooking({ ...booking, ...value });
      handleChangeStep(STEPPER_CONTENT[1].value);
    }
  };

  const renderStepContent = () => {
    if (step === STEPPER_CONTENT[2].value) {
      return (
        <BookingOverview
          selectedMenu={selectedMenu}
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
        />
      );
    }
    return (
      <BookingMenuSelection
        initialMenu={booking.menuId || ''}
        menus={manipulatorMenus?.docs || []}
        onSubmit={handleSubmitStep}
      />
    );
  };

  return (
    <Box sx={styles.bookingPageWrapper}>
      <Link
        href={backNavigateContent[step]?.href || ''}
        shallow={backNavigateContent[step]?.shallow}
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
