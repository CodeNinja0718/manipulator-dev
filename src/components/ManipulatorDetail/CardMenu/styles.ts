import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  treatmentBox: {
    padding: { xs: '15px 12px', tablet: '20px' },
    margin: '20px 0px 0px',
    backgroundColor: 'cream',
  },
  reservableTimeBox: {
    padding: '10px',
    margin: '20px 0px 0px',
    borderRadius: '5px',
    backgroundColor: 'pink',
  },
  reservableTimeWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: '1 1 auto',
    gap: '5px',
    color: 'black',
  },
  labelItem: {
    borderRadius: '2px',
    fontSize: '14px',
    minHeight: '22px',
    padding: '2px 8px',
    minWidth: '54px',
    cursor: 'default',
    boxShadow: 'none !important',
    backgroundColor: 'white',
    pointerEvents: 'none',
  },
  textStyle: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'black',
  },
  button: {
    marginTop: 10,
    width: '226px',
    minHeight: '40px',
    fontSize: '16px',

    '& .MuiButton-endIcon': {
      '& svg': {
        height: 12,
        right: 12,
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
