import ReservationSvg from '@icons/icon_reservation.svg';
import {
  Box,
  Pagination,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import theme from 'theme';
import { RESERVATION_STATUS_VALUE } from 'utils/const';

const ReservationCard = dynamic(() => import('components/ReservationCard'));
interface ReservationItemModel {
  id?: string;
  avatar: string;
  position: string;
  salonName: string;
  status: string;
  date: Date;
  startTime: string;
  endTime: string;
  firstVisitPrice: string;
  couponA: string;
  couponB: string;
  amountPayment: string;
  expectedPayment: string;
  cancellationDate: Date;
}

const list: ReservationItemModel[] = [
  {
    id: '1',
    avatar: 'images/default-avatar.png',
    position: '整体師太郎',
    salonName: '快適整体院',
    status: RESERVATION_STATUS_VALUE.confirmed,
    date: new Date('11/11/2022'),
    startTime: '11:00',
    endTime: '12:00',
    firstVisitPrice: '6,000円',
    couponA: '1回使用',
    couponB: '- 1,000円',
    expectedPayment: '5,000',
    amountPayment: '5,000円',
    cancellationDate: new Date('11/11/2022'),
  },
  {
    id: '2',
    avatar: 'images/default-avatar.png',
    position: '整体師太郎',
    salonName: '快適整体院',
    status: RESERVATION_STATUS_VALUE.visitedHospital,
    date: new Date('11/11/2022'),
    startTime: '11:00',
    endTime: '12:00',
    firstVisitPrice: '6,000円',
    couponA: '1回使用',
    couponB: '- 1,000円',
    expectedPayment: '5,000',
    amountPayment: '5,000円',
    cancellationDate: new Date('11/11/2022'),
  },
  {
    id: '3',

    avatar: 'images/default-avatar.png',
    position: '整体師太郎',
    salonName: '快適整体院',
    status: RESERVATION_STATUS_VALUE.cancel,
    date: new Date('11/11/2022'),
    startTime: '11:00',
    endTime: '12:00',
    firstVisitPrice: '6,000円',
    couponA: '1回使用',
    couponB: '- 1,000円',
    expectedPayment: '5,000',
    amountPayment: '5,000円',
    cancellationDate: new Date('11/11/2022'),
  },
  {
    id: '4',
    avatar: 'images/default-avatar.png',
    position: '整体師太郎',
    salonName: '快適整体院',
    status: RESERVATION_STATUS_VALUE.cancel,
    date: new Date('11/11/2022'),
    startTime: '11:00',
    endTime: '12:00',
    firstVisitPrice: '6,000円',
    couponA: '1回使用',
    couponB: '- 1,000円',
    expectedPayment: '5,000',
    amountPayment: '5,000円',
    cancellationDate: new Date('11/11/2022'),
  },
];
const ReservationHistory = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('normalTablet'));
  return (
    <Box bgcolor="white" sx={{ padding: { xs: '60px 20px', tablet: '60px' } }}>
      <Box
        component={'div'}
        style={{ marginBottom: '60px', textAlign: 'center' }}
      >
        <Typography
          variant="title"
          style={{
            display: 'inline-block',
          }}
        >
          <SvgIcon
            component={ReservationSvg}
            sx={{
              width: 24,
              height: 22,
            }}
            inheritViewBox
          />{' '}
          予約履歴
        </Typography>
      </Box>
      {list.map((item: ReservationItemModel) => (
        <ReservationCard key={item.id} data={item} />
      ))}
      <Box display="flex" justifyContent="center">
        <Pagination
          color="orange"
          count={10}
          siblingCount={isMobile ? 0 : 1}
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

ReservationHistory.getLayout = (page: React.ReactNode) => {
  return (
    <Layout isCardLayout withSideMenu>
      {page}
    </Layout>
  );
};

export default ReservationHistory;
