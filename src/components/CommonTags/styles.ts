import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  item: {
    border: '1px solid',
    px: 12,
    py: 7,
    fontSize: 14,
    lineHeight: 1,
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'transparent',
      color: 'white',
      background: (theme: Theme) => theme.palette.secondary.main,
      transition: '0.5s',
    },
  },
  itemActive: {
    borderColor: 'transparent',
    color: 'white',
    background: (theme: Theme) => theme.palette.secondary.main,
    '&:hover': {
      color: (theme: Theme) => theme.palette.black,
      borderColor: (theme: Theme) => theme.palette.black,
      background: 'transparent',
      transition: '0.5s',
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
