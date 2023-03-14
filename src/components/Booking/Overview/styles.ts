import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  bookingOverviewWrapper: {
    padding: {
      xs: '40px 0 60px',
      tablet: '56px 0 67px',
    },
  },
  bookingDetailWrapper: {
    maxWidth: 700,
    width: '100%',
    padding: {
      xs: 20,
      tablet: '40px 50px',
    },
    backgroundColor: 'cream',
    flexWrap: {
      xs: 'wrap',
      tablet: 'nowrap',
    },
    '.manipulator-info': {
      flex: '0 0 260px',
    },
    '.booking-info': {
      flex: '1 1 100%',
      svg: {
        width: 20,
        height: 20,
      },
    },
  },
  submitBtn: {
    maxWidth: 323,
    width: '100%',
    margin: '40px auto 0',
  },
};

export default styles;
