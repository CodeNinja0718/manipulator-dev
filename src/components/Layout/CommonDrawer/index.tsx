import CloseIcon from '@icons/close.svg';
import HomeSvg from '@icons/icon_home.svg';
import LogoutSvg from '@icons/icon_logout.svg';
import ProfileSvg from '@icons/icon_profile.svg';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import Link from 'components/Link';
import { useUser } from 'hooks';
import useGlobalState from 'hooks/useGlobalState';
import { CUSTOMER_NAVIGATION, SOCIAL_MEDIA } from 'utils/const';

import styles from './styles';

const CommonDrawer: React.FC = () => {
  const { openDrawer, setOpenDrawer } = useGlobalState();
  const { data } = useUser();

  const renderMenuList = () => {
    if (data) {
      return (
        <List disablePadding onClick={() => setOpenDrawer(false)}>
          <Link href="/">
            <ListItemButton sx={styles.menuBtn}>
              <ListItemIcon>
                <HomeSvg />
              </ListItemIcon>
              <ListItemText>マイページ</ListItemText>
            </ListItemButton>
          </Link>
          <List disablePadding>
            <Link href="/profile">
              <ListItemButton sx={styles.menuBtn}>
                <ListItemIcon>
                  <ProfileSvg />
                </ListItemIcon>
                <ListItemText>マイページ</ListItemText>
              </ListItemButton>
            </Link>
            {CUSTOMER_NAVIGATION.map((nav) => {
              return (
                <Link key={nav.href} href={nav.href}>
                  <ListItemButton sx={{ ...styles.menuBtn, paddingLeft: 80 }}>
                    <ListItemIcon>{nav.icon}</ListItemIcon>
                    <ListItemText>{nav.label}</ListItemText>
                  </ListItemButton>
                </Link>
              );
            })}
          </List>
          <ListItemButton sx={styles.menuBtn} className="logout">
            <ListItemIcon>
              <LogoutSvg />
            </ListItemIcon>
            <ListItemText>ログアウト</ListItemText>
          </ListItemButton>
        </List>
      );
    }

    return (
      <List disablePadding onClick={() => setOpenDrawer(false)}>
        <Link href="/">
          <ListItemButton sx={styles.menuBtn}>
            <ListItemIcon>
              <HomeSvg />
            </ListItemIcon>
            <ListItemText>マイページ</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/register">
          <ListItemButton sx={styles.menuBtn}>
            <ListItemIcon>
              <ProfileSvg />
            </ListItemIcon>
            <ListItemText>新規会員登録</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/login">
          <ListItemButton sx={styles.menuBtn}>
            <ListItemIcon>
              <LogoutSvg />
            </ListItemIcon>
            <ListItemText>ログイン</ListItemText>
          </ListItemButton>
        </Link>
      </List>
    );
  };

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      PaperProps={{
        sx: styles.drawerContainer,
      }}
    >
      <Stack direction="row" sx={styles.drawerHeader}>
        <Link href="/" className="logo">
          整体なび
        </Link>
        <Box sx={styles.closeButton} onClick={() => setOpenDrawer(false)}>
          <CloseIcon width="30px" height="30px" color="white" />
        </Box>
      </Stack>
      <Box sx={styles.drawerContent}>{renderMenuList()}</Box>
      <Stack
        sx={styles.drawerFooter}
        gap={20}
        direction="row"
        justifyContent="end"
        alignItems="center"
      >
        {SOCIAL_MEDIA.map((social) => (
          <Link key={social.href} href={`/${social.href}`}>
            {social.icon}
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
};

export default CommonDrawer;
