import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  button: {
    width: 375,
    fontWeight: '600',
    background: 'white',
    // color: (theme: Theme) => theme.palette.text.primary,
    // '&:hover, &:active, &:focus': {
    //   background: (theme: Theme) => theme.palette.orangeBold,
    //   color: 'white',
    //   '& svg': {
    //     color: 'white',
    //   },
    // },

    '& .MuiButton-startIcon': {
      '& svg': {
        width: 39,
      },
    },
  },
  filterArea: {
    position: 'relative',
    margin: 'auto',
    mt: { xs: 45, md: 30 },
    mb: { xs: 45, md: 19 },
    paddingX: '10px',
    gap: {
      xs: 20,
      tablet: 34,
    },
    width: {
      xs: '100%',
      tablet: '782px',
    },
    maxWidth: {
      xs: '450px',
      tablet: '782px',
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
