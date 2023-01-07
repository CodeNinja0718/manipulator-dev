import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sideMenuBox: {
    px: { xs: 20 },
    py: { xs: 30 },
    width: '260px',
    background: 'linear-gradient(to bottom, #ff9a4d, #eb6600)',
  },
  sideMenuTitleBox: {
    pb: '10px',
    borderBottom: `3px solid ${(theme: Theme) => theme.palette.orangeBoldText}`,
    display: 'block',
  },
  contentBox: {
    width: 'calc(100% - 260px)',
  },
  sideMenu: {
    bgcolor: '#ffffff',
    borderTopLeftRadius: 30,
    px: { xs: 20 },
    py: { xs: 30 },
    display: 'block',
  },
  listItem: {
    // p: 2,
  },
  link: {
    textDecoration: 'unset',
  },
  listItemButton: {
    color: (theme: Theme) => theme.palette.orangeText,
  },
  listItemText: {
    color: (theme: Theme) => theme.palette.text.primary,
    ml: '10px',
  },
  userName: {
    color: 'white',
    fontSize: 18,
    lineHeight: '27px',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
