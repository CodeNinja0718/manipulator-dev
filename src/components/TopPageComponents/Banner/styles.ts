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
} as Record<string, SxProps<Theme>>;

export default styles;
