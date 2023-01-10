import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
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
      mobile: `calc(100vh - 284px)`,
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
  },
  sideMenuTitleBox: {
    pb: '10px',
    borderBottom: `3px solid `,
    borderBottomColor: 'orangeBoldText',
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
  },
  listItem: {
    // p: 2,
  },
  link: {
    textDecoration: 'unset',
    background: '#000000',
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
} as Record<string, SxProps<Theme>>;

export default styles;
