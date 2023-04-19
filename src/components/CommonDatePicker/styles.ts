import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  icon: {
    width: 20,
    height: 18,
    color: `${(theme: Theme) => theme.palette.grayText}`,
  },
  popperSx: {
    '& .PrivatePickersYear-root > button': {
      xs: {
        transform: 'scale(0.8)',
        width: 'fit-content',
        padding: '0 1rem',
      },
      tablet: {
        transform: 'scale(1)',
      },
    },
  },
};

export default styles;
