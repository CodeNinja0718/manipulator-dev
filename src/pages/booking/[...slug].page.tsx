import ArrowLeftIcon from '@icons/arrow-left.svg';
import { Box, Stack } from '@mui/material';
import { dehydrate } from '@tanstack/react-query';
import BookingMenuSelection from 'components/Booking/MenuSelection';
import Stepper from 'components/Booking/Stepper';
import Layout from 'components/Layout';
import Link from 'components/Link';
import ManipulatorSummaryInfo from 'components/Manipulator/SummaryInfo';
import { useFetch } from 'hooks';
import type {
  IManipulator,
  IReservationMenu,
} from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import type { GetServerSideProps } from 'next';
import type { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { STEPPER_CONTENT } from 'utils/const';
import queryClient, { fetchData } from 'utils/queryClient';

import styles from './styles';

const BookingPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const manipulatorId = slug![0] || '';
  const step = slug![1] || 'step-1';

  const { data: manipulatorDetail } = useFetch<IManipulator>({
    ...manipulatorQuery.detailManiplator(manipulatorId),
    enabled: false,
    staleTime: 1000 * 60 * 2,
  });
  const { data: manipulatorMenus } = useFetch<{ docs: IReservationMenu[] }>({
    ...manipulatorQuery.manipulatorMenus(manipulatorId),
    enabled: false,
    staleTime: 1000 * 60 * 2,
  });

  const backNavigateContent: Record<
    string,
    {
      href: LinkProps['href'];
      shallow: boolean;
      content: string;
    }
  > = {
    'step-1': {
      href: `/manipulator/${manipulatorId}`,
      shallow: false,
      content: '整体師詳細に戻る',
    },
    'step-2': {
      href: {
        pathname: router.pathname,
        query: {
          slug: [manipulatorId, 'step-1'],
        },
      },
      shallow: true,
      content: 'メニュー選択に戻る',
    },
    'step-3': {
      href: {
        pathname: router.pathname,
        query: {
          slug: [manipulatorId, 'step-2'],
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

  const renderStepContent = () => {
    return <BookingMenuSelection menus={manipulatorMenus?.docs || []} />;
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
          data={manipulatorDetail}
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

const STEPPER_VALUES = STEPPER_CONTENT.map((content) => content.value);
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug } = query;
    const manipulatorId = slug![0] || '';
    const step = slug![1] || 'step-1';
    if (!STEPPER_VALUES.includes(step)) {
      return {
        notFound: true,
      };
    }
    await fetchData({
      ...manipulatorQuery.detailManiplator(manipulatorId),
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
