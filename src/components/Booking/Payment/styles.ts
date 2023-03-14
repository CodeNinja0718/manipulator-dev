import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  bookingPaymentWrapper: {
    mt: {
      xs: 25,
      tablet: 40,
    },
  },
  menuDetailWrapper: {
    padding: 12,
    border: '2px solid',
    borderColor: 'secondary.main',
    borderRadius: '5px',
    color: 'black',
    mt: 16,
    mb: 25,
    svg: {
      width: 20,
      height: 20,
    },
  },
  selectPaymentWrapper: {
    mt: 24,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'silver',
    padding: '40px 0 32px',
  },
  paymentTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    svg: {
      width: 24,
      height: 24,
    },
  },
  paymentNote: {
    mt: 20,
    mb: 11,
    span: {
      color: '#d82c2c',
      fontWeight: 'bold',
    },
  },
  cardListWrapper: {
    gap: 10,
    '.card-info': {
      cursor: 'pointer',
      padding: '8px 19px 8px 16px',
      backgroundColor: 'cream',
      borderRadius: '5px',
      color: 'black',
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
  cancelDate: {
    fontSize: 14,
    mt: 32,
    mb: 18,
    span: {
      mr: 20,
      fontSize: 16,
      color: '#d82c2c',
      fontWeight: 'bold',
    },
  },
  cancelNote: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    mb: 40,
  },
  submitBtn: {
    maxWidth: 323,
    width: '100%',
    margin: '0 auto',
  },
};

export default styles;
