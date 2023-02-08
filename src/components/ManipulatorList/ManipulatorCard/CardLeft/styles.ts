import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  colLeft: {
    flex: { xs: '0 0 85px', tablet: '0 0 105px' },
    alignItems: 'center',
    marginTop: 25,
    display: 'flex',
    flexDirection: 'column',
  },
  colLeftItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'center',
  },
  averageRating: {
    color: 'orangeText',
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '20px',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
