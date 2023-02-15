import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  checkboxItem: {
    m: 0,
    pl: 17,
    pr: 10,
    py: 9,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: (theme: Theme) => `1px solid ${theme.palette.grullo}`,

    '& .customCheckbox': {
      width: 18,
      height: 18,
    },

    '&:last-child': {
      border: 'none',
    },

    '& .MuiFormControlLabel-label': {
      color: '#4169a5',
    },
  },
  loadingBox: {
    display: 'flex',
    width: '100%',
    my: 9,
    justifyContent: 'center',
  },
  loading: {
    width: 25,
    height: 25,
    color: (theme: Theme) => theme.palette.orangeBold,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
