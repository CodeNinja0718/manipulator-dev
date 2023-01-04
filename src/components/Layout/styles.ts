import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  main: {
    backgroundColor: 'white',
    backgroundImage: 'url(/images/main_bg.webp)',
    backgroundSize: 'contain',
    backgroundPosition: 'top center',
    minHeight: 'calc(100vh - 163px)',
    display: 'flex',
    flexDirection: 'column',
  },
  fabButton: (theme: Theme) => ({
    width: { xs: 40, tablet: 56 },
    height: { xs: 40, tablet: 56 },
    position: 'fixed',
    right: 24,
    zIndex: 2,
    transition: 'all 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
    bgcolor: 'white',
    border: `solid 2px ${theme.palette.primary.main}`,
    '&:hover': {
      bgcolor: 'white',
    },
  }),
};

export default styles;
