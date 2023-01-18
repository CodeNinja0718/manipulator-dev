import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  wrapper: {
    width: '100%',
    background: 'white',
  },
  customerReivewTitle: {
    width: 'fit-content',
    fontSize: { xs: 32, tablet: 37.55 },
    fontWeight: 500,
    m: 'auto',
  },
  customerReivewBackground: {
    width: 'inherit',
    height: {
      xs: 'auto',
      normalTablet: '600px',
    },
    pt: { xs: 40, tablet: 60 },
    pb: { xs: 40, tablet: 68 },
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
      normalTablet: 'calc(50% - 60px)',
    },
    height: {
      xs: '170px',
      normalTablet: '154px',
    },
    '& img': {
      objectFit: {
        xs: 'contain',
        normalTablet: 'initial',
      },
      objectPosition: {
        xs: 'top center',
        normalTablet: 'initial',
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
