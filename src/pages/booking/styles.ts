import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  bookingPageWrapper: {
    padding: {
      xs: '16px 20px 60px',
      tablet: 40,
    },
  },
  backNavigate: {
    color: 'graySolid',
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    gap: 4,
    mb: {
      xs: 20,
      tablet: 32,
    },
    svg: {
      width: 12,
      height: 12,
    },
  },
  bookingContentWrapper: {
    flexWrap: {
      xs: 'wrap',
      tablet: 'nowrap',
    },
    '.manipulator-info': {
      flex: '0 0 260px',
    },
    '.step-content': {
      flex: '1 1 auto',
    },
  },
};

export default styles;
