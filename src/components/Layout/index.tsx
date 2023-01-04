import { ArrowUpward } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useScroll } from 'framer-motion';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import styles from './styles';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

export default function Layout({
  children,
  showFooter = true,
  isCard = false,
}: {
  children: ReactNode;
  showFooter?: boolean;
  isCard?: boolean;
}) {
  const pageHeight =
    typeof document !== 'undefined' ? document.body.scrollHeight : 0;

  const [opacity, setOpacity] = useState(0);
  const [bottom] = useState(24);
  const { scrollY } = useScroll({
    offset: ['0px start', `${pageHeight - 67}px end`],
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > document.documentElement.clientHeight) {
        setOpacity(1);
      } else setOpacity(0);
    });
  }, [scrollY]);

  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Box
        component="main"
        sx={[
          ...(Array.isArray(styles.main) ? styles.main : [styles.main]),
          () => ({
            minHeight: {
              xs: showFooter ? `calc(100vh - 322px)` : `calc(100vh - 51px)`,
              mobile: showFooter ? `calc(100vh - 284px)` : `calc(100vh - 51px)`,
            },
          }),
        ]}
      >
        <Box
          sx={
            isCard
              ? {
                  maxWidth: 950,
                  bgcolor: 'white',
                  padding: 40,
                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.16)',
                }
              : {}
          }
          width="100%"
          margin="0 auto"
          mt={22}
          mb={103}
        >
          {children}
        </Box>
      </Box>

      <IconButton
        sx={[
          ...(Array.isArray(styles.fabButton)
            ? styles.fabButton
            : [styles.fabButton]),
          {
            opacity,
            pointerEvents: opacity === 1 ? 'normal' : 'none',
            bottom,
            transform: `scale(${opacity ? 1 : 0})`,
          },
        ]}
        color="primary"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <ArrowUpward />
      </IconButton>
      {showFooter && <Footer />}
    </div>
  );
}
