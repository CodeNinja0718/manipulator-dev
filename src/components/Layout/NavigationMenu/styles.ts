import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  navigationMenuWrapper: {
    backgroundColor: 'cream',
    borderRadius: '5px',
  },
  menuItem: {
    color: 'black',
    flex: '1 1 50%',
    padding: '10px 24px 10px 18px',
    textDecoration: 'none',
    position: 'relative',
    fontWeight: 'bold',
    fontSize: 14,
    svg: {
      width: 12,
      height: 12,
      position: 'absolute',
      right: 15,
      top: 15,
      color: 'secondary.main',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:nth-of-type(7)': {
      flex: '1 1 100%',
    },
  },
};

export default styles;
