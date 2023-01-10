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
import { Box, Container } from '@mui/material';
import { gradientComponent } from 'hoc/GrandientComponent';
import type { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Logo from '../Header/Logo';
import SideMenu from './SideMenu';
import styles from './styles';

export interface SideMenuItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  children?: SideMenuItem[];
}
const customerMenus: SideMenuItem[] = [
  {
    path: '/',
    label: '予約履歴',
    icon: <LocalOfferOutlined />,
  },
  {
    path: '/1',
    label: '回数券',
    icon: <MapOutlined />,
  },
  {
    path: '/2',
    label: 'クーポン',
    icon: <DiscountOutlined />,
  },
  {
    path: '/3',
    label: 'お気に入り',
    icon: <FavoriteRounded />,
  },
  {
    path: '/4',
    label: '会員情報',
    icon: <AccountCircleOutlined />,
  },
  {
    path: '/5',
    label: 'クレジットカード情報',
    icon: <CreditCardOutlined />,
  },
  {
    path: '/6',
    label: 'ご利用ガイド',
    icon: <AutoStoriesOutlined />,
  },
  {
    path: '/7',
    label: 'その他',
    icon: <ListOutlined />,
  },
];
const SideMenuLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Container sx={styles.mainBox} maxWidth={false}>
        <Header
          color="transparent"
          textColor="text.primary"
          iconColor="orangeText"
          sx={styles.appBar}
          logo={<Logo />}
        />
        <Box component="main" sx={styles.main}>
          <Box
            sx={{
              maxWidth: 950,
              bgcolor: 'white',
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.16)',
            }}
            width="100%"
            margin="0 auto"
          >
            <Box display={{ xs: 'flex' }}>
              {/* {
              gradientComponent(
                <Box sx={{display: { xs: 'none', tablet: 'block' }}}>
                  <SideMenu menus={customerMenus} />
                <Box/>,
                'linear-gradient(to bottom, #ff9a4d, #eb6600)',
              )
              } */}
              {gradientComponent(
                <Box sx={{ display: { xs: 'none', tablet: 'block' } }}>
                  <SideMenu menus={customerMenus} />
                </Box>,
                'linear-gradient(to bottom, #ff9a4d, #eb6600)',
              )}

              <Box sx={styles.contentBox} overflow="hidden">
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Container>
    </div>
  );
};

export default SideMenuLayout;
