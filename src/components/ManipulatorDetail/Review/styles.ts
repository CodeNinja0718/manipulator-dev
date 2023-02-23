import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  reviewContainer: {
    padding: { xs: 25 },
    backgroundColor: 'cream',
    marginTop: 30,
    '& .MuiTabs-flexContainer button': {
      maxWidth: 160,
    },
    '& .MuiTab-root': {
      backgroundColor: '#9c795e',
      color: 'white',

      svg: {
        path: {
          fill: 'white !important',
        },
      },

      '&.Mui-selected': {
        backgroundColor: 'white',
        color: 'orangeBold',
        svg: {
          path: {
            fill: '#ea6500 !important',
          },
        },
      },
    },
    '& .underlineCustom': {
      height: 2.2,
      transform: 'translateY(-1.6px)',
      backgroundColor: 'cream',
    },
    '& .customTabs': {
      button: {
        maxWidth: 'initial',
      },
    },
  },
  button: {
    marginTop: 10,
    width: '226px',
    minHeight: '40px',
    fontSize: '16px',

    '& .MuiButton-endIcon': {
      '& svg': {
        height: 12,
        right: 12,
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
