import TicketSvg from '@icons/icon_ticket.svg';
import { Stack, Typography } from '@mui/material';
import Layout from 'components/Layout';
import TicketCard from 'components/Ticket/Card';

const TicketListPage = () => {
  // const router = useRouter();
  // const { page = '1' } = router.query;

  // const { list, isLoading, totalPages, total } = useList<any>({
  //   ...ticketQuery.getTickets,
  //   customParams: {
  //     page: typeof page === 'string' ? Number(page) : 1,
  //     limit: 4,
  //   },
  // });

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
      {/* {isLoading && (
        <Stack height="100%" justifyContent="center">
          <CircularProgress />
        </Stack>
      )} */}
      <Stack spacing={40} px={{ xs: 0, md: 40 }} width={'100%'}>
        {/* {list.map((item) => (
          <TicketCard key={item._id} data={item} />
        ))} */}
        <TicketCard data={{}} />
        <TicketCard data={{}} />
      </Stack>
      {/* {totalPages > 1 && <ListPagination total={total} limit={4} />} */}
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
