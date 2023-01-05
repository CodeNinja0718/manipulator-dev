import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Box, Container, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'components/Link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import styles from './styles';

const customerMenus: any[] = [
  {
    path: '/',
    label: '予約履歴',
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    path: '/',
    label: '回数券',
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    path: '/',
    label: 'クーポン',
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    path: '/',
    label: 'お気に入り',
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    path: '/',
    label: '会員情報',
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    path: '/',
    label: 'クレジットカード情報',
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    path: '/',
    label: 'ご利用ガイド',
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    path: '/',
    label: 'その他',
    icon: <LocalOfferOutlinedIcon />,
  },
];
const SideMenuLayout = ({ children }: { children: ReactNode }) => {
  const { route } = useRouter();

  return (
    <Container maxWidth="lg" disableGutters sx={styles.container}>
      <Box display={{ xs: 'flex' }}>
        <Box sx={styles.sideMenuBox}>
          <Box sx={styles.sideMenu}>
            <Box sx={styles.sideMenuTitleBox}>
              <Typography variant="subtitle1">会員メニュー</Typography>
            </Box>
            <List component="nav" aria-label="side-menu" sx={styles.listItem}>
              {customerMenus.map((menu) => (
                <Link href={menu.path} key={menu.path} sx={styles.link}>
                  <ListItemButton
                    sx={styles.listItemButton}
                    selected={route.startsWith(menu.path)}
                  >
                    {menu.icon}{' '}
                    <ListItemText
                      sx={styles.listItemText}
                      primary={menu.label}
                    />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Box>
        </Box>
        <Box sx={styles.contentBox} overflow="hidden">
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default SideMenuLayout;
