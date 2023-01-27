import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  boxContainer: {
    width: 97,
    cursor: 'pointer',
  },
  circleBox: {
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
  },
  icon: {
    fontSize: '1rem',
    width: 53,
    height: 57,
  },
  labelText: {
    mt: 10,
    textAlign: 'center',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
