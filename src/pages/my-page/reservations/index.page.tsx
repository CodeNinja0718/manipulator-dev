import ReservationSvg from '@icons/icon_reservation.svg';
import { CircularProgress, Stack, Typography } from '@mui/material';
import Layout from 'components/Layout';
import ListPagination from 'components/ListPagination';
import { useList } from 'hooks';
import type { IReservationItem } from 'models/reservation/interface';
import reservationQuery from 'models/reservation/query';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ReservationCard = dynamic(() => import('components/Reservation/Card'));

const ReservationListPage = () => {
  const router = useRouter();
  const { page = '1' } = router.query;

  const { list, isLoading, totalPages, total } = useList<IReservationItem>({
    ...reservationQuery.getReservations,
    customParams: {
      page: typeof page === 'string' ? Number(page) : 1,
      limit: 4,
    },
    staleTime: 1000 * 60 * 2,
  });

  return (
    <Stack
      alignItems="center"
      sx={{ padding: { xs: '45px 20px 70px', tablet: '60px 20px 54px' } }}
    >
      <Typography
        variant="title"
        mb={55}
        display="flex"
        gap={8}
        alignItems="center"
      >
        <ReservationSvg width={24} height={24} />
        予約履歴
      </Typography>
      {isLoading && (
        <Stack height="100%" justifyContent="center">
          <CircularProgress />
        </Stack>
      )}
      <Stack gap={40} mb={40} sx={{ maxWidth: 570, width: '100%' }}>
        {list.map((item) => (
          <ReservationCard key={item._id} data={item} />
        ))}
      </Stack>
      {totalPages !== 1 && <ListPagination total={total} limit={4} />}
    </Stack>
  );
};

ReservationListPage.getLayout = (page: React.ReactNode) => {
  return (
    <Layout isCardLayout withSideMenu>
      {page}
    </Layout>
  );
};

export default ReservationListPage;
