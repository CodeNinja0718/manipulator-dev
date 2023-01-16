import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  searchContainer: {
    gap: 22,
    pt: 34,
    pb: 34,
  },
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
  },
} as Record<string, SxProps<Theme>>;

export default styles;
