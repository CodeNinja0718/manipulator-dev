import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  mainContainer: {
    padding: { xs: '0px', tablet: '40px' },
  },
  rightContainer: {
    paddingLeft: { xs: '0px', tablet: '30px' },
    backgroundColor: 'white',
  },
  loadingBox: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: 50,
    height: 50,
    color: (theme: Theme) => theme.palette.orangeBold,
  },
  title: {
    color: 'orange.main',
    padding: { xs: '10px 0px', tablet: '30px 0px' },
    svg: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
  },

  labelStyle: {
    color: 'orangeText',
    fontWeight: '600',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    maxWidth: '100%',
    minHeight: 50,
    fontSize: 20,

    '& .MuiButton-startIcon': {
      left: 10,
      '& svg': {
        width: 14,
        height: 14,
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
