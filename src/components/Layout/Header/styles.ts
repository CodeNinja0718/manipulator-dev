import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  logo: {
    fontSize: { xs: '24px', tablet: '28px' },
    letterSpacing: '5px',
    fontWeight: '500',
    color: { xs: 'white', tablet: 'orangeText' },
  },
  appBarBox: {
    maxWidth: 950,
    margin: '0 auto',
  },

  logoContainer: {
    display: 'flex',
    textDecorationLine: 'none',
  },
  navbarItem: {
    ml: 12,
    textDecorationLine: 'none',
    fontSize: {
      xs: 12,
      lg: 16,
      tablet: 16,
    },
  },
  navbarHref: {
    textDecorationLine: 'none',
  },
  whiteButton: {
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 0,
    minWidth: 165,
    py: '17.5px',
  },
  blueButton: {
    borderRadius: 0,
    fontSize: 24,
    fontWeight: 'bold',
    minWidth: 165,
    py: '17.5px',
  },
  navbarMobileContainer: {
    alignItems: 'center',
    spacing: '38px',
    justifyContent: { xs: 'flex-start', mw: 'center' },
    display: {
      xs: 'flex',
      lg: 'none',
    },
    p: 2,
    overflowX: 'scroll',
    '& a': {
      flexShrink: 0,
    },
  },
  navbarTabletContainer: {
    alignItems: 'center',
    spacing: '38px',
    mr: 5,
    justifyContent: 'center',
    display: {
      xs: 'none',
      lg: 'flex',
    },
    '& a': {
      textDecoration: 'none',
      '&:hover, &:active, &:focus': {
        opacity: 0.75,
        transition: '0.5s',
      },
    },
  },
  sideMenuMobile: {
    flex: '1 0 auto',
    width: '100%',
    height: '100vh',
    bgcolor: '#7d90b0',
    mr: { tablet: 2 },
  },
  userName: {
    color: 'white',
    fontSize: 25,
    lineHeight: '1.75',
  },
  listSidebar: {
    p: 0,
    a: {
      '> div': {
        borderTop: '1px solid white',
      },
      '&:last-child': {
        '> div': {
          borderBottom: '1px solid white',
        },
      },
    },
  },
  listItemButton: {
    px: 5.4,
    py: 2.5,
    '& svg': {
      color: 'white',
      mr: 1.4,
    },
    '&.MuiListItemButton-root': {
      color: 'white',
    },
    '&.Mui-selected': {
      backgroundColor: 'secondary.main',
      color: 'heading',
      '& svg': {
        color: 'heading',
      },
      '&:hover': {
        bgcolor: 'secondary.main',
      },
    },
    '& .MuiListItemText-root': {
      '& .MuiListItemText-primary': {
        fontSize: 20,
        fontWeight: 400,
      },
    },
  },
  menuMobileBox: {
    height: 'calc(100vh - 65px)',
    overflowY: 'scroll',
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
} as Record<string, SxProps<Theme>>;

export default styles;
