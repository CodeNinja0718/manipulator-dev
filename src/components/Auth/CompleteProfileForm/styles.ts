import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  completeProfileFormWrapper: {
    maxWidth: 610,
    margin: {
      xs: '45px auto 60px',
      tablet: '64px auto 59px',
    },
    padding: '0 20px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    svg: {
      width: 28,
      height: 28,
    },
  },
  submitBtn: {
    maxWidth: 323,
    width: '100%',
    marginTop: 20,
  },
};

export default styles;
