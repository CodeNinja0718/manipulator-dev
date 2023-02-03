import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  loginFormWrapper: {
    maxWidth: 610,
    padding: '0 20px',
    margin: {
      xs: '45px auto',
      margin: '56px auto',
    },
  },
  checkboxControlWrapper: {
    margin: '20px 0 40px',
    alignSelf: {
      xs: 'start',
      tablet: 'center',
    },
  },
  checkboxSx: {
    padding: 0,
    marginRight: 8,
  },
  submitBtn: {
    maxWidth: 323,
    width: '100%',
  },
};

export default styles;
