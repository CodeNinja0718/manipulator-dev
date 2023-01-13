import { ArrowUpward } from '@mui/icons-material';
import type { SxProps, Theme } from '@mui/material';
import { Box, Card, IconButton } from '@mui/material';
import { useScroll } from 'framer-motion';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import styles from './styles';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

export default function Layout({
  children,
  isCard = false,
  mainStyle,
  cardStyle,
  header = <Header />,
}: {
  children: ReactNode;
  isCard?: boolean;
  mainStyle?: SxProps<Theme> | undefined;
  cardStyle?: SxProps<Theme> | undefined;
  header?: ReactNode;
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

  const renderMainLayout = (content: ReactNode) => {
    if (isCard) {
      return <Card sx={cardStyle || styles.cardLayout}>{content}</Card>;
    }
    return content;
  };

  return (
    <Box sx={styles.layoutContainer}>
      {header}
      <Box component="main" sx={mainStyle || styles.main}>
        {renderMainLayout(children)}
      </Box>

      <Footer />
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
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <ArrowUpward />
      </IconButton>
    </Box>
  );
}
