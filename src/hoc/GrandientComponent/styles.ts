import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  orange: {
    backgroundColor: 'initial',
    '& > *': {
      background: (theme: Theme) => theme.palette.orangeGradient,
    },
  },
  green: {
    backgroundColor: 'initial',
    '& > *': {
      background: (theme: Theme) => theme.palette.greenGradient,
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
