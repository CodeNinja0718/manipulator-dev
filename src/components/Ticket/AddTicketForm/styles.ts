import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  couponFormContainer: {
    maxWidth: {
      xs: undefined,
      tablet: 560,
    },
    margin: {
      xs: 0,
      tablet: 'auto',
    },
    width: '100%',

    '& .MuiFormControl-root label.MuiTypography-root.MuiTypography-body1': {
      color: 'secondary.main',

      '& .required-mark': {
        display: 'none',
      },
    },
  },
  submitBtn: {
    maxWidth: 323,
    width: '100%',
    marginBottom: {
      xs: 40,
      tablet: 20,
    },
    fontWeight: 'bold',
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
};

export default styles;
