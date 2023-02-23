import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  wrapper: {
    display: 'flex',
    px: { xs: 15, tablet: 40 },
    pt: { xs: 17, tablet: 40 },
    pb: { xs: 60, tablet: 44 },
    flexWrap: 'wrap',
  },
  leftItem: {
    width: 257,
    mr: 43,
  },
  rightItem: {},
} as Record<string, SxProps<Theme>>;

export default styles;
