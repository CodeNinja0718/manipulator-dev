/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable unused-imports/no-unused-vars */
import { Box, Drawer, Stack, SvgIcon, Typography } from '@mui/material';
import { useUser } from 'hooks';
import Link from 'next/link';
import { useState } from 'react';

import SidebarMobile from './SidebarMobile';
import styles from './styles';

const Navbar = ({
  isMobile = false,
  navbar = [],
}: {
  isMobile?: boolean;
  navbar: any[];
}) => {
  useUser({ enabled: false });
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleCloseSidebar = () => {
    setIsOpenSidebar(false);
  };

  return (
    <Box display="flex">
      <Stack
        direction="row"
        spacing={40}
        flex={1}
        sx={
          isMobile ? styles.navbarMobileContainer : styles.navbarTabletContainer
        }
      >
        {navbar.map((section) => (
          <>
            <Link key={section.href} href={section.href} rel="noreferrer">
              <Box display="flex" alignItems="center">
                <Box height={20}>
                  <SvgIcon
                    component={section.icon}
                    sx={{ color: 'white', width: 'auto', height: 'inherit' }}
                    viewBox={section.viewBox}
                  />
                </Box>
                <Typography
                  component="span"
                  fontWeight={500}
                  color="white"
                  ml={20}
                >
                  {section.label}
                </Typography>
              </Box>
            </Link>
          </>
        ))}
      </Stack>
      <Drawer
        anchor="right"
        open={isOpenSidebar}
        onClose={() => setIsOpenSidebar(false)}
      >
        <SidebarMobile onCloseSidebar={handleCloseSidebar} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
