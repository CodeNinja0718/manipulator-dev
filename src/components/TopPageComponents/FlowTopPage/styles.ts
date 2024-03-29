import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  wrapper: {
    pt: 37,
    pb: { xs: 10, tablet: 74 },
    background: 'white',
  },
  flowTitle: {
    width: 'fit-content',
    fontSize: { xs: 32, tablet: 37.55 },
    fontWeight: 500,
    m: 'auto',
  },
  flowDesktopImage: {
    height: '109px',
    mt: 52,
    display: { xs: 'none', normalTablet: 'block' },
    width: { xs: '768px', normalTablet: '1000px' },
  },
  flowMobileImage: {
    position: 'relative',
    display: { xs: 'block', normalTablet: 'none' },
    height: '311px',
    width: '335px',
    mt: 52,
  },
  button: {
    width: '100%',
    display: { xs: 'flex', normalTablet: 'none' },

    '& .MuiButton-startIcon': {
      '& svg': {
        width: 39,
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
