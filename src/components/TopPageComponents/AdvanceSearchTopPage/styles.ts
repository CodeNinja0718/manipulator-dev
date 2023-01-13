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
  filterArea: {
    position: 'relative',
    margin: 'auto',
    mt: 30,
    mb: 19,
    gap: 34,
    width: {
      sx: '100%',
      tablet: '752px',
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
