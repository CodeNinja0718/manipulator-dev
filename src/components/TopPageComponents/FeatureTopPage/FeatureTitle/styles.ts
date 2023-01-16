import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  topTitle: {
    position: 'absolute',
    top: '-27px',
    width: { sx: '100%', normalTablet: 1000 },
    minHeight: 245,
    border: (theme: Theme) => `solid 3px ${theme.palette.orangeText}`,
    borderRadius: '30px 0 10px 0',
    zIndex: 1,
    justifyContent: 'center',
  },
  arrow: {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    width: 20,
    height: 20,
    background: 'white',
    border: (theme: Theme) => `solid 3px ${theme.palette.orangeText}`,
    borderTop: 'none',
    borderLeft: 'none',
    transform: 'rotateZ(45deg) translateY(17px)',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
