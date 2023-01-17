import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  wrapper: {
    width: '100%',
    background: 'white',
  },
  customerReivewTitle: {
    width: 'fit-content',
    fontSize: 37.55,
    fontWeight: 500,
    m: 'auto',
  },
  customerReivewBackground: {
    width: 'inherit',
    height: {
      xs: 'auto',
      normalTablet: '600px',
    },
    pt: 60,
    pb: 68,
    mt: 52,
  },
  reviewerContainer: {
    display: 'flex',
    width: {
      xs: '100%',
      normalTablet: '979px',
    },
    m: 'auto',
    mt: '68.5px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '27px 60px',
    flexDirection: {
      xs: 'column',
      normalTablet: 'row',
    },
  },
  reviewerItem: {
    position: 'relative',
    width: {
      xs: '320px',
      md: 'calc(50% - 60px)',
    },
    height: {
      xs: '131px',
      md: '154px',
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
