import {
  AccountCircleOutlined,
  AutoStoriesOutlined,
  CreditCardOutlined,
  DiscountOutlined,
  FavoriteRounded,
  ListOutlined,
  LocalOfferOutlined,
  MapOutlined,
} from '@mui/icons-material';
import { Box, Pagination, Typography, useMediaQuery } from '@mui/material';
import Layout from 'components/Layout';
import Header from 'components/Layout/Header';
import Logo from 'components/Layout/Navbar/Logo';
import type { SideMenuItem } from 'components/Layout/SideMenu/SideMenu';
import SideMenu from 'components/Layout/SideMenu/SideMenu';
import styles from 'components/Layout/SideMenu/styles';
import { gradientComponent } from 'hoc/GrandientComponent';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';
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

const customerMenus: SideMenuItem[] = [
  {
    href: '/',
    label: '予約履歴',
    icon: <LocalOfferOutlined />,
  },
  {
    href: '/1',
    label: '回数券',
    icon: <MapOutlined />,
  },
  {
    href: '/2',
    label: 'クーポン',
    icon: <DiscountOutlined />,
  },
  {
    href: '/3',
    label: 'お気に入り',
    icon: <FavoriteRounded />,
  },
  {
    href: '/4',
    label: '会員情報',
    icon: <AccountCircleOutlined />,
  },
  {
    href: '/5',
    label: 'クレジットカード情報',
    icon: <CreditCardOutlined />,
  },
  {
    href: '/6',
    label: 'ご利用ガイド',
    icon: <AutoStoriesOutlined />,
  },
  {
    href: '/7',
    label: 'その他',
    icon: <ListOutlined />,
  },
];
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
    expectedPayment: '5,000円',
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
    <Box padding={60} bgcolor="white">
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
          <LocalOfferOutlined /> 予約履歴
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

ReservationHistory.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      isCard={true}
      cardStyle={{
        maxWidth: 950,
        margin: { xs: '50px auto', tablet: '100px auto' },
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.16)',
      }}
      mainStyle={{
        minHeight: 'calc(100vh - 163px)',
        display: 'flex',
        flexDirection: 'column',
        marginTop: {
          xs: 0,
          normalTablet: 0,
        },
      }}
      header={
        <Header
          color="transparent"
          textColor="text.primary"
          iconColor="orangeText"
          sx={styles.appBar}
          logo={<Logo />}
        />
      }
    >
      <Box display={{ xs: 'flex' }}>
        {gradientComponent(
          <Box
            sx={{
              display: { xs: 'none', tablet: 'block' },
              height: '100%',
            }}
          >
            <SideMenu menus={customerMenus} />
          </Box>,
          'linear-gradient(to bottom, #ff9a4d, #eb6600)',
        )}

        <Box sx={styles.contentBox} overflow="hidden">
          {page}
        </Box>
      </Box>
    </Layout>
  );
};

export default ReservationHistory;
