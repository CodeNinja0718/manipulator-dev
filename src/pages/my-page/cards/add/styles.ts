import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  addCardPageWrapper: {
    padding: {
      xs: '40px 20px 60px',
      tablet: '60px 20px 58px',
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
  cardNote: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: {
      xs: 'left',
      tablet: 'center',
    },
    color: 'error.main',
  },
  submitBtn: {
    mt: {
      xs: 15,
      tablet: 30,
    },
    maxWidth: 323,
    margin: '0 auto',
  },
};

export default styles;
