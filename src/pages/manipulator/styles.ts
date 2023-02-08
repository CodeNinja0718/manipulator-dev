import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  rightContainer: {
    padding: { xs: '60px 20px', tablet: '40px' },
    backgroundColor: 'white',
  },
  leftContainer: {
    display: { xs: 'none', tablet: 'block' },
    height: '100%',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
