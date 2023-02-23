import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  leftInfo: {
    py: { xs: 0, tablet: 30 },
    width: { xs: '100%', tablet: '270px' },
    height: '100%',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  averageRating: {
    color: 'orangeText',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  favoriteBtn: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
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
} as Record<string, SxProps<Theme>>;

export default styles;
