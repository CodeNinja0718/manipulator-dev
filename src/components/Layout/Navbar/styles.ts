import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  logo: {
    fontSize: { xs: '24px', tablet: '28px' },
    letterSpacing: '5px',
    fontWeight: '500',
    color: { xs: 'white', tablet: 'orangeText' },
  },
  sideMenuMobile: {
    flex: '1 0 auto',
    width: '100%',
    height: '100vh',
    bgcolor: '#7d90b0',
    mr: { tablet: 2 },
  },
  logoContainer: {
    display: 'flex',
    textDecorationLine: 'none',
  },
  closeButton: {
    display: 'flex',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    mr: 2,
    cursor: 'pointer',
  },
  menuMobileBox: {
    height: 'calc(100vh - 65px)',
    overflowY: 'scroll',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
