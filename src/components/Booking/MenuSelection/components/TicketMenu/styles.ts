import type { SxProps, Theme } from '@mui/material';

const styles = {
  addTicketBtn: {
    mt: 20,
    fontWeight: 'bold',
    maxWidth: { xs: undefined, tablet: 280 },
    width: '100%',
  },
  ticketLeftText: {
    color: 'orange.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
  ticketLeftNumber: {
    fontWeight: 600,
    display: 'inline-block',
    fontSize: 20,
    px: 2,
    lineHeight: '18px',
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
  ticketLeft: {
    borderRadius: '5px',
    border: '1px solid',
    borderColor: 'orange.main',
    minWidth: 100,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    width: 66,
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
  loading: {
    width: 40,
    height: 40,
    color: (theme: Theme) => theme.palette.orangeBold,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
