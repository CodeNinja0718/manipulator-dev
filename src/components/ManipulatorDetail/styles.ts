import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  button: {
    width: '100%',
    maxWidth: '100%',
    minHeight: 50,
    fontSize: 20,

    '& .MuiButton-startIcon': {
      left: 10,
      '& svg': {
        width: 14,
        height: 14,
      },
    },
  },
  title: {
    color: 'orange.main',
    padding: { xs: '10px 0px', tablet: '30px 0px' },
    svg: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
  },

  labelStyle: {
    color: 'orangeText',
    fontWeight: '600',
    fontSize: '14px',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
