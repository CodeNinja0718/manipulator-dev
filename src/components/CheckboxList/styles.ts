import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    border: (theme: Theme) => `1px solid ${theme.palette.grullo}`,
    height: 216,
    maxWidth: { xs: '100%', mobile: 334 },
    borderRadius: 5,
  },
  leftComponent: {
    background: (theme: Theme) => theme.palette.pink,
    borderRight: (theme: Theme) => `1px solid ${theme.palette.grullo}`,
    minWidth: 44,
  },
  rightComponent: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'scroll',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
