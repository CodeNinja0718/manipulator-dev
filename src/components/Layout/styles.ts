import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  layoutContainer: {
    backgroundColor: 'white',
    backgroundImage: 'url(/images/main_bg.webp)',
    backgroundSize: 'contain',
    backgroundPosition: 'top center',
    p: { xs: '0px', tablet: '0px' },
  },
  mainContent: {
    minHeight: 'calc(100vh - 163px)',
    display: 'flex',
    flexDirection: 'column',
    mt: {
      xs: 0,
      normalTablet: 53.5,
    },
  },
  cardLayout: {
    maxWidth: 950,
    width: '100%',
    bgcolor: 'white',
    margin: '100px auto',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.16)',
  },
  fabButton: (theme: Theme) => ({
    width: { xs: 24, tablet: 40 },
    height: { xs: 24, tablet: 40 },
    position: 'fixed',
    right: 24,
    zIndex: 2,
    transition: 'all 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
    color: theme.palette.gray,
    bgcolor: 'white',
    '&:hover': {
      bgcolor: 'white',
    },
  }),
};

export default styles;
