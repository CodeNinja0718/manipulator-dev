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
  loadingBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  loading: {
    width: 50,
    height: 50,
    color: (theme: Theme) => theme.palette.orangeBold,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
