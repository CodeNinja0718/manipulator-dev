import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  wrapper: {
    width: '100%',
    background: 'white',
    pt: 60,
    pb: 100,
    flexDirection: 'column',
  },
  customerReivewTitle: {
    width: 'fit-content',
    fontSize: 37.55,
    fontWeight: 500,
    m: 'auto',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
