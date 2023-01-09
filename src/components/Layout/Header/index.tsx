import { Box, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import * as React from 'react';

import Navbar from './Navbar';
import styles from './styles';

const Header = () => {
  return (
    <AppBar
      component="nav"
      position="static"
      color="transparent"
      sx={styles.appBar}
    >
      <Box display="flex" justifyContent="space-between" sx={styles.appBarBox}>
        <Stack direction="row" gap={{ xs: 1, tablet: 2 }} alignItems="center">
          <Box sx={styles.logoContainer} component={Link} href="/">
            <Typography variant="h1" sx={styles.logo} color="tertiary">
              整体なび
            </Typography>
          </Box>
        </Stack>
        <Navbar />
      </Box>
    </AppBar>
  );
};

export default Header;
