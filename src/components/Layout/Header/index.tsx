import HomeSvg from '@icons/icon_home.svg';
import LoginSvg from '@icons/icon_logout.svg';
import RegisterSvg from '@icons/icon_profile.svg';
import type { PropTypes, SxProps, Theme } from '@mui/material';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

import Navbar from './Navbar';
import SidebarDesktop from './SidebarDesktop';
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
  return (
    <SidebarDesktop position="sticky" color={color ?? 'secondary'} sx={sx}>
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
          <Box sx={styles.logoContainer} component={Link} href="/">
            {logo}
          </Box>
          <Box display="flex" pt={15} pb={15}>
            <Navbar navbar={navbar} color={textColor} iconColor={iconColor} />
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
