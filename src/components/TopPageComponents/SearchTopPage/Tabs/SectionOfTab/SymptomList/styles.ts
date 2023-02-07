import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  symptomBox: {
    pl: { xs: 0, tablet: 10 },
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.13rem',
  },
  symptomElement: {
    justifyContent: {
      xs: 'flex-start',
      sm: 'space-between',
      tablet: 'flex-start',
    },
    gap: { xs: 15, tablet: 9.6 },
    mt: 20,
    '& .MuiTypography-root': { fontSize: { xs: 16, tablet: 14 } },
    '& .MuiSvgIcon-root': {
      transform: { xs: 'initial', tablet: 'scale(0.6)' },
    },
  },
  circleBox: {
    width: {
      xs: 'calc(calc(100% / 3) - 10px)',
      sm: 90,
      tablet: 57,
    },

    '& .customCircleBoxStyle': {
      width: { xs: 90, tablet: 52 },
      height: { xs: 90, tablet: 52 },
      boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.16)',
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
