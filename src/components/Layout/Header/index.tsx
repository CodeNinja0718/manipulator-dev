import HomeSvg from '@icons/icon_home.svg';
import LoginSvg from '@icons/icon_logout.svg';
import RegisterSvg from '@icons/icon_profile.svg';
import MenuIcon from '@mui/icons-material/Menu';
import type { PropTypes, SxProps, Theme } from '@mui/material';
import { Box, IconButton, Stack } from '@mui/material';
import useGlobalState from 'hooks/useGlobalState';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import CommonDrawer from '../CommonDrawer';
import Navbar from '../Navbar';
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import styles from './styles';

interface HeaderProps {
  color?: PropTypes.Color | 'transparent';
  textColor?: PropTypes.Color | string;
  iconColor?: PropTypes.Color | string;
  logo?: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
}

const navbar: any[] = [
  {
    href: '/',
    label: 'ホーム',
    icon: HomeSvg,
    viewBox: '0 0 36 40',
  },
  {
    href: '/register',
    label: '新規会員登録',
    icon: RegisterSvg,
    viewBox: '0 0 29 31',
  },
  {
    href: '/login',
    label: 'ログイン',
    icon: LoginSvg,
    viewBox: '0 0 35 44',
  },
];

const Header = ({ logo, color, textColor, iconColor, sx }: HeaderProps) => {
  const router = useRouter();
  const { pathname } = router;
  const isGradient = pathname.indexOf('reservation-history');
  const { openDrawer, setOpenDrawer } = useGlobalState();
  const [isScrollDown, setIsScrollDown] = useState(false);
  const handleCloseSidebar = () => {
    setOpenDrawer(false);
  };

  // navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <>
      <DesktopNavbar
        position="fixed"
        color={color ?? 'secondary'}
        sx={sx}
        gradient={isGradient === -1 ? 'orange' : ''}
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          sx={styles.appBarBox}
        >
          <Stack
            direction="row"
            width="100%"
            gap={{ xs: 1, tablet: 2 }}
            alignItems="center"
            justifyContent="inherit"
          >
            <Box sx={styles.logoContainer}>
              <Link
                href="/"
                style={{
                  textDecoration: 'none',
                }}
              >
                {logo}
              </Link>
            </Box>

            <Box
              display="flex"
              pt={{ tablet: 15 }}
              pb={{ tablet: 15 }}
              paddingX="20px"
            >
              <Navbar navbar={navbar} color={textColor} iconColor={iconColor} />
            </Box>
          </Stack>
        </Box>
      </DesktopNavbar>

      {/* Mobile - Reponsive */}
      <Box
        color="white"
        width="100%"
        position="fixed"
        zIndex={2}
        textAlign="end"
        sx={{
          display: { xs: 'inline-block', tablet: 'none' },
          p: { xs: '5px 15px 5px 27px', tablet: '10px 5px 0 0' },
          background: isScrollDown
            ? (theme: Theme) => theme.palette.orangeGradient
            : 'transparent',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            width: '40px',
            height: '40px',
            p: 0,
          }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Drawer In Mobile */}
        <CommonDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <MobileNavbar menus={navbar} onCloseSidebar={handleCloseSidebar} />
        </CommonDrawer>
      </Box>
    </>
  );
};

export default Header;
