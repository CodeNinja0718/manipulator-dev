import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Stack } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'components/Link';
import useBreakpoint from 'hooks/useBreakpoint';
import useGlobalState from 'hooks/useGlobalState';
import React from 'react';

import Navbar from './Navbar';
import styles from './styles';

interface HeaderProps {
  isCardLayout?: boolean;
}

export interface NavbarMenuItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ isCardLayout }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });
  const isBreakpoint = useBreakpoint({});
  const { setOpenDrawer } = useGlobalState();

  if (isCardLayout) {
    return (
      <AppBar
        component="header"
        color="transparent"
        sx={styles.cardLayoutHeader}
      >
        <Stack sx={styles.cardHeaderContent} direction="row">
          <Link href="/" sx={styles.logo}>
            整体なび
          </Link>
          {isBreakpoint ? (
            <IconButton
              aria-label="menu"
              sx={styles.hamburgerBtn}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Navbar isCardLayout />
          )}
        </Stack>
      </AppBar>
    );
  }

  return (
    <>
      {isBreakpoint && (
        <IconButton
          aria-label="menu"
          sx={{
            ...styles.hamburgerBtn,
            position: 'absolute',
            right: 20,
            top: 9,
            zIndex: 1,
          }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      )}
      <AppBar component="header" sx={styles.layoutHeader} data-scroll={trigger}>
        {isBreakpoint ? (
          <>
            <Link href="/" sx={styles.logo}>
              整体なび
            </Link>
            <IconButton
              aria-label="menu"
              sx={styles.hamburgerBtn}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <Navbar />
        )}
      </AppBar>
    </>
  );
};

export default Header;
