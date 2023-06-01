import TicketSvg from '@icons/icon_ticket.svg';
import { CircularProgress, Stack, Typography } from '@mui/material';
import Layout from 'components/Layout';
import ListPagination from 'components/ListPagination';
import TicketCard from 'components/Ticket/Card';
import { useList } from 'hooks';
import type { ITicketItem } from 'models/ticket/interface';
import ticketQuery from 'models/ticket/query';
import { useRouter } from 'next/router';

const TicketListPage = () => {
  const router = useRouter();
  const { page = '1' } = router.query;

  const { list, isLoading, totalPages, total } = useList<ITicketItem>({
    ...ticketQuery.getTickets,
    customParams: {
      page: typeof page === 'string' ? Number(page) : 1,
      limit: 4,
    },
  });

  return (
    <Stack
      alignItems="center"
      overflow={'hidden'}
      sx={{ padding: { xs: '45px 20px 70px', tablet: '60px 20px 54px' } }}
    >
      <Typography
        variant="title"
        mb={55}
        display="flex"
        gap={8}
        alignItems="center"
      >
        <TicketSvg width={24} height={24} />
        回数券
      </Typography>
      {isLoading && (
        <Stack height="100%" justifyContent="center">
          <CircularProgress />
        </Stack>
      )}
      <Stack spacing={40} px={{ xs: 0, md: 40 }} width={'100%'} mb={40}>
        {list?.map((item) => (
          <TicketCard key={item.ticketId} data={item} />
        ))}
        {total === 0 && !isLoading && (
          <Typography
            fontSize={24}
            variant="subtitle1"
            textAlign="center"
            color="gray"
            mb={30}
          >
            空のリスト
          </Typography>
        )}
      </Stack>
      {totalPages > 1 && <ListPagination total={total} limit={4} />}
    </Stack>
  );
};

TicketListPage.getLayout = (page: React.ReactNode) => {
  return (
    <Layout isCardLayout withSideMenu>
      {page}
    </Layout>
  );
};

export default TicketListPage;
