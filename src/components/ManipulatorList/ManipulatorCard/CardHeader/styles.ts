import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  headerAbove: {
    height: 40,
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    pl: '104px',
    position: 'relative',
  },
  headerAboveBtn: {
    position: 'absolute',
    right: '0px',
    top: '0px',
    color: '#fff',
  },
  headerBellow: {
    pl: '70px',
    height: 15,
  },
  header: {
    position: 'relative',
    // borderBottom: '1px solid #ccc',
  },
  avatar: {
    position: 'absolute',
    top: '15px',
    left: '20px',
    width: 60,
    height: 60,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
