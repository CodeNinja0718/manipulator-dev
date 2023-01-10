import CloseIcon from '@icons/close.svg';
import {
  AccountCircleOutlined,
  AutoStoriesOutlined,
  CreditCardOutlined,
  DiscountOutlined,
  FavoriteRounded,
  HomeOutlined,
  ListOutlined,
  LocalOfferOutlined,
  LogoutOutlined,
  MapOutlined,
  PersonOutlineOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { gradientComponent } from 'hoc/GrandientComponent';
import Link from 'next/link';

import type { SideMenuItem } from '../SideMenuLayout';
import SideMenu from '../SideMenuLayout/SideMenu';
import Logo from './Logo';
import styles from './styles';

// const customerMenus: any[] = [];

const SidebarMobile = ({ onCloseSidebar }: { onCloseSidebar: () => void }) => {
  const menus: SideMenuItem[] = [
    {
      path: '/',
      label: '予約履歴',
      icon: <HomeOutlined />,
    },
    {
      path: '/1',
      label: '回数券',
      icon: <PersonOutlineOutlined />,
      children: [
        {
          path: '/11',
          label: '予約履歴',
          icon: <LocalOfferOutlined />,
        },
        {
          path: '/22',
          label: '回数券',
          icon: <MapOutlined />,
        },
        {
          path: '/33',
          label: 'クーポン',
          icon: <DiscountOutlined />,
        },
        {
          path: '/44',
          label: 'お気に入り',
          icon: <FavoriteRounded />,
        },
        {
          path: '/55',
          label: '会員情報',
          icon: <AccountCircleOutlined />,
        },
        {
          path: '/66',
          label: 'クレジットカード情報',
          icon: <CreditCardOutlined />,
        },
        {
          path: '/6',
          label: 'ご利用ガイド',
          icon: <AutoStoriesOutlined />,
        },
        {
          path: '/77',
          label: 'その他',
          icon: <ListOutlined />,
        },
      ],
    },
    {
      path: '/2',
      label: 'クーポン',
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Box sx={{ width: { xs: '100vw', fcol: '325px' } }} role="presentation">
      {gradientComponent(
        <Box sx={styles.sideMenuMobile}>
          <Box
            sx={{
              p: '10px 15px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            height="65px"
          >
            <Box sx={styles.logoContainer} component={Link} href="/">
              <Logo />
            </Box>
            <Box sx={styles.closeButton} onClick={onCloseSidebar}>
              <CloseIcon width="30px" height="30px" color="white" />
            </Box>
          </Box>
          <Box sx={styles.menuMobileBox}>
            <SideMenu menus={menus} isMobile={true} />
          </Box>
          {/* <Box
            display="flex"
            alignItems="center"
            sx={{
              px: 3.75,
              pt: 3.2,
              pb: 5,
            }}
          >
            <Box ml="12px">
              <Typography color="white" fontSize={19}>
                会員メニュー
              </Typography>
              <Typography className="line-clamp" sx={styles.userName}>
                {get(data, 'lastName')} {get(data, 'firstName')}
              </Typography>
            </Box>
          </Box>
          <List component="nav" aria-label="side-menu" sx={styles.listSidebar}>
            {customerMenus.map((menu) => (
              <Link href={menu.path} key={menu.path} onClick={onCloseSidebar}>
                <ListItemButton
                  sx={styles.listItemButton}
                  selected={route.startsWith(menu.path)}
                >
                  {menu.icon} <ListItemText primary={t(menu.label)} />
                </ListItemButton>
              </Link>
            ))}
          </List> */}
        </Box>,
        'linear-gradient(to bottom, #ff9a4d, #eb6600)',
      )}
    </Box>
  );
};

export default SidebarMobile;
