import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  wrapper: {
    width: '100%',
    background: 'white',
    pt: { xs: 32, tablet: 60 },
    pb: { xs: 50, tablet: 100 },
    flexDirection: 'column',
  },
  customerReivewTitle: {
    width: 'fit-content',
    fontSize: { xs: 32, tablet: 37.55 },
    fontWeight: 500,
    m: 'auto',
  },
  button: {
    width: '100%',
    maxWidth: 335,
    display: { xs: 'flex', normalTablet: 'none' },

    '& .MuiButton-startIcon': {
      '& svg': {
        width: 39,
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
