import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  reservationBox: {
    borderTopLeftRadius: 30,
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    overflow: 'hidden',
    marginBottom: 40,
  },
  reservationHeaderAbove: {
    height: 40,
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    pl: '70px',
  },
  reservationHeaderBellow: {
    pl: '70px',
    height: 26,
  },
  reservationHeader: {
    position: 'relative',
    borderBottom: '1px solid #ccc',
  },
  reservationAvatar: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: 50,
    height: 50,
  },

  reservationContent: {
    padding: 20,
  },
  reservationLine: {
    borderBottom: '1px solid  #ccc',
    padding: '14px 0px',

    '&:last-child': {
      border: 0,
    },
  },
  priceText: {
    '& .MuiTypography-root': {
      '&:first-child': {
        fontSize: '26px',
        fontWeight: 'bold',
      },
    },
  },
  couponText: {
    color: '#d82c2c',
  },
  buttonIcon: {
    height: '50px',
    width: '50px',
    flex: '0 0 50px',
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: {
      xs: '0',
      tablet: '10px',
    },
  },
  buttonIconText: {
    display: 'flex',
    marginBottom: '20px',
    flexDirection: {
      xs: 'column',
      tablet: 'row',
    },
    textAlign: {
      xs: 'center',
      tablet: 'left',
    },
    gap: {
      xs: '10px',
      tablet: '0',
    },
    alignItems: 'center',
  },
  buttonText: {},
} as Record<string, SxProps<Theme>>;

export default styles;
