import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  cardListPageWrapper: {
    padding: {
      xs: '40px 20px 90px',
      tablet: '60px 20px 106px',
    },
    maxWidth: 610,
    width: '100%',
    margin: '0 auto',
  },
  title: {
    fontSize: 22,
    mb: { xs: 65, tablet: 57 },
    svg: {
      width: 23,
      height: 16,
      mr: 4,
    },
  },
  cardListWrapper: {
    width: '100%',
  },
  cardItem: {
    '.card-info': {
      backgroundColor: 'cream',
      padding: '8px 19px 8px 16px',
      color: 'black',
      borderRadius: '5px',
      '.MuiTypography-root': {
        display: 'flex',
        alignItems: 'center',
      },
      '&[data-selected=true]': {
        backgroundColor: 'secondary.main',
        color: 'white',
        '.MuiTypography-root': {
          fontWeight: 'bold',
        },
      },
    },
  },
  radioBtn: {
    'span:first-of-type': {
      backgroundColor: 'white',
      borderRadius: '50%',
      svg: {
        margin: '-3px',
      },
    },
  },
  removeCard: {
    fontSize: 14,
    color: 'primary.main',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
    svg: {
      color: 'graySolid',
    },
  },
  addCardBtn: {
    mt: {
      xs: 38,
      tablet: 60,
    },
    maxWidth: 323,
    margin: '0 auto',
  },
};

export default styles;
