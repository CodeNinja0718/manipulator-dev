/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable unused-imports/no-unused-vars */
import MenuIcon from '@mui/icons-material/Menu';
import type { PropTypes } from '@mui/material';
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useUser } from 'hooks';
import Link from 'next/link';
import { useState } from 'react';

import SidebarMobile from './SidebarMobile';

const Navbar = ({
  navbar = [],
  color = 'white',
  iconColor = 'white',
}: {
  navbar: any[];
  color?: PropTypes.Color | string;
  iconColor?: PropTypes.Color | string;
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
        sx={{ display: { xs: 'none', tablet: 'flex' } }}
      >
        {navbar.map((section) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={section.href}
            href={section.href}
            rel="noreferrer"
          >
            <Box display="flex" alignItems="center">
              <Box height={20}>
                <SvgIcon
                  component={section.icon}
                  sx={{ color: iconColor, width: 'auto', height: 'inherit' }}
                  viewBox={section.viewBox}
                />
              </Box>
              <Typography
                component="span"
                fontWeight={500}
                color={color}
                ml={20}
              >
                {section.label}
              </Typography>
            </Box>
          </Link>
        ))}
      </Stack>
      <Box color="white">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: 'block', tablet: 'none' },
            width: '40px',
            height: '40px',
          }}
          onClick={() => setIsOpenSidebar(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
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
