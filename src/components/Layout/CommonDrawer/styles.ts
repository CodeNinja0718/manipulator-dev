import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  drawerContainer: {
    maxWidth: 375,
    width: '100%',
    background: 'linear-gradient(to bottom, #ff9a4d, #eb6600)',
    paddingLeft: 21,
  },
  drawerHeader: {
    padding: '18px 18px 18px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .logo': {
      color: 'white',
      svg: {
        width: 115,
        height: 25,
      },
    },
  },
  closeButton: {
    display: 'flex',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    svg: {
      width: 32,
      height: 32,
    },
  },
  drawerContent: {
    pt: 54,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    width: '100%',
    height: '100%',
    a: {
      textDecoration: 'none',
    },
  },
  menuBtn: {
    fontSize: 16,
    padding: '8px 40px',
    color: 'black',
    '& .MuiListItemIcon-root': {
      minWidth: 'unset',
      marginRight: 20,
    },
    svg: {
      color: 'secondary.main',
      width: 20,
      height: 20,
    },
    '&.logout': {
      color: 'graySolid',
      svg: {
        color: 'graySolid',
      },
    },
  },
  drawerFooter: {
    height: 73,
    paddingRight: 18,
    svg: {
      color: 'white',
    },
  },
  appBar: {
    boxShadow: 'none',
    padding: { xs: '10px 15px', tablet: '25px' },
    height: { xs: '65px', tablet: '106px' },
    backgroundImage: {
      xs: 'linear-gradient(to bottom, #ff9a4d, #eb6600)',
      tablet: 'none',
    },
    color: 'white',
  },
  mainBox: {
    backgroundColor: 'white',
    backgroundImage: 'url(/images/main_bg.webp)',
    backgroundSize: 'contain',
    backgroundPosition: 'top center',
    p: { xs: '0px', tablet: '0px' },
  },
  main: {
    minHeight: {
      xs: `calc(100vh - 322px)`,
      mobile: `calc(100vh - 293px)`,
    },
    display: 'flex',
    flexDirection: 'column',
    mb: '110px',
  },
  sideMenuBox: {
    pl: { xs: 20 },
    py: { xs: 0, tablet: 30 },
    width: { xs: '100%', tablet: '260px' },
    background: 'linear-gradient(to bottom, #ff9a4d, #eb6600)',
    height: '100%',
  },
  sideMenuTitleBox: {
    pb: '10px',
    borderBottom: `3px solid `,
    borderBottomColor: 'orangeBold',
    display: 'block',
  },
  contentBox: {
    width: 'calc(100% - 260px)',
  },
  sideMenu: {
    bgcolor: '#ffffff',
    borderTopLeftRadius: 30,
    pl: { xs: 20 },
    py: { xs: 30 },
    display: 'block',
    height: '100%',
    position: 'relative',
  },
  listItem: {
    // p: 2,
  },
  link: {
    textDecoration: 'unset',
    display: 'block',
    // background: '#000000',
  },
  listItemButton: {
    color: (theme: Theme) => theme.palette.orangeText,
  },
  listItemText: {
    color: (theme: Theme) => theme.palette.text.primary,
    ml: '10px',
    '& svg': {
      fontSize: '20px',
    },
    '&.Mui-selected': {
      backgroundColor: '#ffffff',

      '& .MuiListItemText-root': {
        '& .MuiListItemText-primary': {
          color: 'tertiary.main',
        },
      },
      '&:hover': {
        backgroundColor: 'rgb(234 101 0 / 20%)',
      },
    },
    '&.MuiButtonBase-root': {
      pl: '5px',
    },
  },
  userName: {
    color: 'white',
    fontSize: 18,
    lineHeight: '27px',
  },
  sideMenuText: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    textDecoration: 'underline',
    color: 'text.primary',
  },
};

export default styles;
