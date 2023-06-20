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
    fontSize: { xs: 14, tablet: 16 },
    fontWeight: 600,
  },
  ticketLeftNumber: {
    fontWeight: 600,
    display: 'inline-block',
    fontSize: { xs: 18, tablet: 20 },
    px: 2,
    lineHeight: '18px',
  },
  text: {
    fontSize: { xs: 14, tablet: 16 },
    fontWeight: 600,
  },
  ticketLeft: {
    borderRadius: '5px',
    border: '1px solid',
    borderColor: 'orange.main',
    minWidth: { xs: 80, tablet: 100 },
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
    '&.hide': {
      display: 'none',
    },
  },
  loading: {
    width: 40,
    height: 40,
    color: (theme: Theme) => theme.palette.orangeBold,
  },
  defaultNumberOfTicket: {
    display: 'flex',
    border: '1px solid',
    padding: '7.6px 0',
    pl: 15,
    minWidth: 66,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: '5px',
    borderColor: (theme: Theme) => theme.palette.grullo,
    justifyContent: 'space-between',

    '&.hide': {
      display: 'none',
    },
  },
  arrowGroupBtn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '3px',
    pr: 14,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
