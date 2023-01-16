import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  button: {
    width: 375,
    background: 'white',
    color: (theme: Theme) => theme.palette.text.primary,
    '&:hover, &:active, &:focus': {
      background: (theme: Theme) => theme.palette.orangeBold,
      color: 'white',
      '& svg': {
        color: 'white',
      },
    },

    '& .MuiButton-startIcon': {
      '& svg': {
        width: 39,
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
