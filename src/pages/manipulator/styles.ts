import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  manipulatorContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', tablet: 'row' },
  },
  rightContainer: {
    padding: { xs: '60px 20px', tablet: '40px' },
    backgroundColor: 'white',
  },
  leftContainer: {
    display: { xs: 'block' },
    height: '100%',
    marginTop: { xs: 15, tablet: 0 },
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
