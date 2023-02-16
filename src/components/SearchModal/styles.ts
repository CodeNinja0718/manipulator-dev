import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  loadingBox: {
    display: 'flex',
    width: '100%',
    my: 9,
    justifyContent: 'center',
  },
  loading: {
    width: 25,
    height: 25,
    color: (theme: Theme) => theme.palette.orangeBold,
  },
  contentContainer: {
    minHeight: { xs: '44vh', tablet: '51vh' },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
