import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  ticketWrapper: {
    boxShadow: 3,
    borderTopLeftRadius: '30px',
    borderBottomRightRadius: '10px',
    overflow: 'hidden',
  },
  header: {
    width: '100%',
  },
  headerAbove: {
    p: { xs: '8px 20px', md: '8px 28px' },
  },
  headerBellow: {
    p: { xs: '3px 20px', md: '3px 28px' },
    borderBottom: '1px solid #ccc',
    fontSize: 14,
  },
  contentWrapper: {
    p: { xs: '20px 20px', md: '20px 28px' },
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
  timesLeft: {
    borderRadius: '5px',
    border: '1px solid',
    borderColor: 'orange.main',
    minWidth: 100,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timesLeftText: {
    color: 'orange.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
  timesLeftNumber: {
    fontWeight: 600,
    display: 'inline-block',
    fontSize: 20,
    px: 2,
    lineHeight: '18px',
  },
  numberInput: {
    width: 75,
    height: 40,
    fontWeight: 'bold',
    mr: 10,
    '& .MuiNumberInput-stepper': {
      gap: 3,
      mr: 0,
      justifyContent: 'center',
    },
    '& .MuiInputBase-input': {
      pr: 0,
    },
    '& .MuiInputBase-input:disabled': {
      backgroundColor: '#ffffff',
      cursor: 'not-allowed',
    },
  },
  btn: {
    width: 226,
    margin: '10px auto 20px',
    display: 'flex',
    fontSize: 16,
    '&.MuiButtonBase-root': {
      py: 4,
      px: 15,
      minHeight: 40,
    },
    '& .MuiButton-endIcon': {
      position: 'relative',
      right: '-5px',
    },
  },
  btnText: {
    width: 226,
    margin: '0 auto 10px',
    fontSize: 16,
    cursor: 'pointer',
    color: 'graySolid',
    textAlign: 'center',
    textDecoration: 'underline',
    display: 'block',
    '&.MuiButtonBase-root': {
      py: 4,
      px: 10,
      minHeight: 40,
    },
  },
  expText: {
    fontWeight: 600,
    color: '#d82c2c',
  },
  errText: {
    color: '#d82c2c',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
