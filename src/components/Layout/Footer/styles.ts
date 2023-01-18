import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  footerBox: {
    color: 'white',
    bgcolor: 'grown',
    padding: 16,
    pb: { xs: 24.7, tablet: 25.7 },
    pl: { xs: 28, tablet: 16 },
    pr: { xs: 28, tablet: 16 },
    width: '100%',
    minHeight: '210px',
  },
  socical: {
    marginTop: 39,
    justifyContent: 'center',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
