import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  footerBox: {
    color: 'white',
    background: 'var(--footer-background)',
    padding: 2,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    minHeight: '210px',
  },
  wave: {
    position: 'absolute',
    background: 'url(/images/wave.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '4.5rem',
    left: 0,
    top: '-57px',
    [`@media (min-width: 2880px)`]: {
      height: '5.5rem',
    },
    [`@media (min-width: 3840px)`]: {
      height: '13rem',
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
