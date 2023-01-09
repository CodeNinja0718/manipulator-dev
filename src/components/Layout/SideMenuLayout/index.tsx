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
import { Box, Container, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'components/Link';
import { gradientComponent } from 'hoc/GrandientComponent';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import styles from './styles';

const customerMenus: any[] = [
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
  const { route } = useRouter();

  return (
    <div>
      <Container sx={styles.mainBox} maxWidth={false}>
        <Header
          color="transparent"
          textColor="text.primary"
          iconColor="orangeText"
          sx={styles.appBar}
          logo={
            <Typography variant="h1" sx={styles.logo} color="orangeText">
              整体なび
            </Typography>
          }
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
              {gradientComponent(
                <>
                  <Box sx={styles.sideMenuBox}>
                    <Box sx={styles.sideMenu}>
                      <Box sx={styles.sideMenuTitleBox}>
                        <Typography variant="subtitle1">マイページ</Typography>
                      </Box>
                      <List
                        component="nav"
                        aria-label="side-menu"
                        sx={styles.listItem}
                      >
                        {customerMenus.map((menu) => (
                          <Link
                            href={menu.path}
                            key={menu.path}
                            sx={styles.link}
                          >
                            <ListItemButton
                              sx={styles.listItemButton}
                              selected={route.startsWith(menu.path)}
                            >
                              {menu.icon}
                              <ListItemText
                                sx={styles.listItemText}
                                primary={menu.label}
                              />
                            </ListItemButton>
                          </Link>
                        ))}
                      </List>
                    </Box>
                  </Box>
                </>,
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
