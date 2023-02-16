import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  modalContainer: {
    position: 'absolute' as 'absolute',
    top: { xs: 0, md: '50%' },
    left: { xs: 0, md: '50%' },
    width: '100%',
    maxWidth: 900,
    height: { xs: '100vh', md: 'initial' },
    transform: { xs: 'initial', md: 'translate(-50%, -50%)' },
    background: 'white',
    boxShadow: 24,
    borderRadius: { xs: 0, md: '10px' },
    p: { xs: '23px 15px', normalMobile: 23, md: '30px 50px 54px' },
    '&:focus-visible': {
      outline: 'none',
    },
  },
  titleModal: {
    width: '100%',
    margin: 'auto',
    mb: 36,
  },
  bodyModal: {
    mt: { xs: 40, md: 36 },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
