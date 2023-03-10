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
    padding: { xs: 20, tablet: 0 },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
