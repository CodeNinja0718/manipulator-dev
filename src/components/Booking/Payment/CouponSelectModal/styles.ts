import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  modalContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    width: {
      xs: 'calc(100% - 48px)',
      tablet: '100%',
    },
    maxWidth: 640,
    maxHeight: '80vh',
    boxShadow: 24,
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    '&:focus-visible': {
      outline: 'none',
    },
    display: 'flex',
    flexDirection: 'column',
  },
  titleModal: {
    px: 20,
    py: 12,
    mb: 20,
    bgcolor: 'secondary.main',
  },
  bodyModal: {
    px: 20,
    pb: 24,
  },
  buttonWrapper: {
    px: 24,
  },
  submitBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: 320,
    width: '100%',
  },
  listItemWrapper: {
    py: 12,
    bgcolor: 'cream',
    mb: 8,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
