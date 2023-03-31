import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  searchContainer: {
    gap: { xs: 15, tablet: 22 },
    p: '34px 10px 34px',
  },
  button: {
    width: 375,
    background: 'white',
    fontWeight: 600,
    fontSize: { xs: 15, tablet: 16 },
    padding: { xs: '8px 12px 8px 20px', tablet: '8px 24px' },

    '& .MuiButton-endIcon': {
      right: { xs: 10, tablet: 17 },
    },
    '& .MuiButton-startIcon': {
      left: { xs: 12, tablet: 17 },
      '& svg': {
        width: { xs: 16, tablet: 39 },
      },
    },
    // color: (theme: Theme) => theme.palette.text.primary,
    // '&:hover, &:active, &:focus': {
    //   background: (theme: Theme) => theme.palette.orangeBold,
    //   color: 'white',
    //   '& svg': {
    //     color: 'white',
    //   },
    // },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
