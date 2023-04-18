import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  wrapper: {
    backgroundColor: 'cream',
    mt: 37,
    mb: 20,
    px: 20,
    pt: 29,
    pb: 22,
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
  ticketBox: {
    backgroundColor: 'white',
    px: 22,
    py: 20,
    borderRadius: '5px',
  },
  couponBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    fontSize: 14,
    width: 100,
    minHeight: 30,
    maxWidth: 'auto',
    pl: 0,
    pr: 0,
    backgroundColor: 'white',

    '& .MuiButton-startIcon': {
      position: 'initial',
      left: 'initial',
      '& svg': {
        width: 14,
        height: 14,
        mr: 10,
      },
    },
  },
  submitBtn: {
    maxWidth: 226,
    fontSize: 16,
    fontWeight: 'bold',
    px: 18,
    backgroundColor: 'white',
  },
};

export default styles;
