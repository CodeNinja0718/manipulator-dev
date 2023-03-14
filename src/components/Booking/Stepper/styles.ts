import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  stepperWrapper: {
    width: '100%',
    border: '1px solid',
    borderColor: 'secondary.main',
    borderRadius: '5px',
  },
  stepBtn: {
    flex: '1 1 100%',
    pointerEvents: 'none',
    borderRadius: 0,
    fontSize: 14,
    padding: '4px 8px',
    minHeight: 30,
    position: 'relative',
    whiteSpace: 'nowrap',
    '&:not(:last-of-type)': {
      borderRight: '1px solid',
      borderColor: 'secondary.main',
      '&[data-active=true]:after': {
        content: "' '",
        position: 'absolute',
        right: -9,
        top: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '15px 0 15px 8px',
        borderColor: 'transparent',
        borderLeftColor: 'secondary.main',
      },
    },
    '&[data-completed=true], &[data-active=true]': {
      backgroundColor: 'secondary.main',
      color: 'white',
    },
    '&[data-completed=true]': {
      pointerEvents: 'auto',
      borderRight: '1px solid',
      borderColor: 'white',
    },
  },
};

export default styles;
