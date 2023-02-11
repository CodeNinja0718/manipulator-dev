import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  item: (theme: Theme) => ({
    border: '1px solid',
    px: 12,
    py: 7,
    fontSize: 14,
    lineHeight: 1,
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover, &:active, &:focus': {
      borderColor: 'transparent',
      color: 'white',
      background: theme.palette.secondary.main,
      transition: '0.5s',
      [theme.breakpoints.down('lg')]: {
        color: theme.palette.black,
        borderColor: theme.palette.black,
        background: 'transparent',
        transition: '0.5s',
      },
    },
  }),
  itemActive: (theme: Theme) => ({
    border: '1px solid',
    borderColor: 'transparent',
    color: 'white',
    px: 12,
    py: 7,
    fontSize: 14,
    lineHeight: 1,
    borderRadius: '5px',
    cursor: 'pointer',
    background: theme.palette.secondary.main,
    '&:hover, &:active, &:focus': {
      [theme.breakpoints.up('lg')]: {
        color: theme.palette.black,
        borderColor: theme.palette.black,
        background: 'transparent',
        transition: '0.5s',
      },
    },
  }),
} as Record<string, SxProps<Theme>>;

export default styles;
