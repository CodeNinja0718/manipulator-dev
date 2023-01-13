import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  logoContainer: {
    position: 'absolute',
    top: { xs: 65, normalTablet: 135 },
    left: { xs: 30, normalTablet: 375 },
    display: 'flex',
    width: { xs: 141, normalTablet: 213 },
    height: { xs: 141, normalTablet: 213 },
    backgroundColor: (theme: Theme) => theme.palette.orangeBold,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgIconStyle: {
    fontSize: { xs: '6rem', normalTablet: '8.5rem' },
    color: 'white',
  },
  borderElement: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 6,
    left: 6,
    border: '1px solid white',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
