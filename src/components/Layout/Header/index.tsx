import HomeSvg from '@icons/icon_home.svg';
import LoginSvg from '@icons/icon_logout.svg';
import RegisterSvg from '@icons/icon_profile.svg';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

import Navbar from './Navbar';
import SidebarDesktop from './SidebarDesktop';
import styles from './styles';

const navbar: any[] = [
  {
    href: '/register',
    label: 'ホーム',
    icon: HomeSvg,
    viewBox: '0 0 36 40',
  },
  {
    href: '/',
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

const Header = () => {
  return (
    <SidebarDesktop position="sticky" color="secondary">
      <Box display="flex" width="100%" justifyContent="space-between">
        <Stack
          direction="row"
          width="100%"
          gap={{ xs: 1, tablet: 2 }}
          alignItems="center"
          justifyContent="inherit"
          pl={20}
          pr={20}
        >
          <Box sx={styles.logoContainer} component={Link} href="/"></Box>
          <Box display="flex" pt={15} pb={15}>
            <Navbar navbar={navbar} />
          </Box>
        </Stack>
      </Box>
    </SidebarDesktop>
    // <AppBar
    //   component="nav"
    //   position="sticky"
    //   color="secondary"
    //   sx={styles.appBar}
    // >
    //   <Box display="flex" justifyContent="space-between">
    //     <Stack direction="row" gap={{ xs: 1, tablet: 2 }} alignItems="center">
    //       <Box sx={styles.logoContainer} component={Link} href="/"></Box>
    //     </Stack>
    //     <Navbar navbar={navbar} />
    //   </Box>
    // </AppBar>
  );
};

export default Header;
