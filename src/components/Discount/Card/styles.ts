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
    p: { xs: '10px 22px' },
  },
  headerBellow: {
    p: { xs: '3px 22px' },
    borderBottom: '1px solid #ccc',
    fontSize: 14,
  },
  contentWrapper: {
    p: { xs: '10px 22px 15px' },
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: '#d82c2c',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
