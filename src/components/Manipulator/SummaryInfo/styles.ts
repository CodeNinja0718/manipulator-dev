import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  manipulatorSummaryInfoWrapper: {
    py: { xs: 0, tablet: 30 },
    width: { xs: '100%', tablet: '270px' },
    height: '100%',
  },
  avatarWrapper: {
    position: 'relative',
    width: 80,
    height: 80,
    img: {
      borderRadius: '50%',
      objectFit: 'cover',
    },
    flex: '0 0 80px',
  },
  favoriteBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: 'translate(18px,18px)',
  },
  ratingWrapper: {
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      svg: {
        marginRight: 4,
        width: 14,
        height: 14,
      },
    },
  },
};

export default styles;
