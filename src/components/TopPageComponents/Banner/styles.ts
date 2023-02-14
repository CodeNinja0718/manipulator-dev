import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  boxBannerPosition: {
    position: 'absolute',
    top: { xs: '35%', sm: '50%' },
    left: { xs: '50%', sm: '50%' },
    transform: 'translate(-50%, -50%)',
  },
  boxBanner: {
    position: 'relative',
    width: { xs: 326, md: 500 },
    height: { xs: 141, md: 220 },

    justifyContent: 'center',
    alignItems: 'center',
  },
  contentOfBanner: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: { xs: '-4px', md: '-34px' },
  },
  desktopBox: {
    display: { xs: 'none', sm: 'block' },
    height: { xs: 320, normalMobile: 362, tablet: 448 },
  },
  desktopBannerElement: {
    height: {
      xs: 363,
      tablet: 448,
    },
    '& img': {
      objectFit: { xs: 'cover', normalTablet: 'initial' },
      objectPosition: { xs: 'top left', normalTablet: 'initial' },
    },
  },
  mobileBox: {
    display: { xs: 'block', sm: 'none' },
  },
  mobileBannerElement: {
    width: '100%',
    height: '100%',
    pt: 'calc(100% - 13px)',
  },
  wrapper: {
    background: (theme: Theme) => theme.palette.orangeGradient,
    paddingTop: { xs: '10px', tablet: 0 },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
