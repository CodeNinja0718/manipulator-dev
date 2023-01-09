/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable unused-imports/no-unused-vars */
import { HomeOutlined, LoginOutlined } from '@mui/icons-material';
import { Box, Drawer, Stack, Typography } from '@mui/material';
import { useUser } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import SidebarMobile from './SidebarMobile';
import styles from './styles';

const navbar: any[] = [
  {
    href: '/1',
    label: 'ホーム',
    icon: <HomeOutlined />,
  },
  {
    href: '/7',
    label: 'ログアウト',
    icon: <LoginOutlined />,
  },
];

const Navbar = ({ isMobile = false }: { isMobile?: boolean }) => {
  useUser({ enabled: false });
  const { pathname } = useRouter();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleCloseSidebar = () => {
    setIsOpenSidebar(false);
  };

  return (
    <Box display="flex">
      <Stack
        direction="row"
        spacing="38px"
        flex={1}
        sx={
          isMobile ? styles.navbarMobileContainer : styles.navbarTabletContainer
        }
      >
        {navbar.map((section, index) =>
          pathname === '/' ? (
            <div key={`${section.href}_0`}>
              {section?.isDirectLink ? (
                <Link
                  key={`${section.href}_1`}
                  href={section.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'tertiary.main'
                      }
                      lineHeight={0}
                      component={'span'}
                    >
                      {section.icon}
                    </Box>

                    <Typography
                      component={'span'}
                      fontWeight={500}
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'text.primary'
                      }
                      sx={styles.navbarItem}
                    >
                      {section.label}
                    </Typography>
                  </Box>
                </Link>
              ) : (
                <ScrollLink
                  to={section.href}
                  smooth
                  offset={-96}
                  key={`${section.href}_2`}
                >
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'tertiary.main'
                      }
                      lineHeight={0}
                      component={'span'}
                    >
                      {section.icon}
                    </Box>

                    <Typography
                      component={'span'}
                      fontWeight={500}
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'text.primary'
                      }
                      sx={styles.navbarItem}
                    >
                      {section.label}
                    </Typography>
                  </Box>
                </ScrollLink>
              )}
            </div>
          ) : (
            <div key={`${section.href}_0`}>
              {section?.isDirectLink ? (
                <Link
                  key={`${section.href}_3`}
                  href={section.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'tertiary.main'
                      }
                      lineHeight={0}
                      component={'span'}
                    >
                      {section.icon}
                    </Box>

                    <Typography
                      component={'span'}
                      fontWeight={500}
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'text.primary'
                      }
                      sx={styles.navbarItem}
                    >
                      {section.label}
                    </Typography>
                  </Box>
                </Link>
              ) : (
                <Link
                  style={{ textDecoration: 'none' }}
                  key={`${section.href}_4`}
                  href={`/#${section.href}`}
                >
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'tertiary.main'
                      }
                      lineHeight={0}
                      component={'span'}
                    >
                      {section.icon}
                    </Box>

                    <Typography
                      component={'span'}
                      fontWeight={500}
                      color={
                        index === navbar.length - 1
                          ? 'text.secondary'
                          : 'text.primary'
                      }
                      sx={styles.navbarItem}
                    >
                      {section.label}
                    </Typography>
                  </Box>
                </Link>
              )}
            </div>
          ),
        )}
      </Stack>
      <Drawer
        anchor="right"
        open={isOpenSidebar}
        onClose={() => setIsOpenSidebar(false)}
        sx={{
          display: { sl: 'none', xs: 'block' },
        }}
      >
        <SidebarMobile onCloseSidebar={handleCloseSidebar} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
