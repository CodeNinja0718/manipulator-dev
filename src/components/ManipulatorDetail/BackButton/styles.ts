import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  linkStyle: {
    alignItems: 'center',
    cursor: 'pointer',
    svg: {
      width: 14,
      height: 14,
      color: 'graySolid',
      transform: 'rotate(180deg)',
    },
    display: { xs: 'none', tablet: 'flex' },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
