import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  icon: {
    width: 20,
    height: 18,
    color: `${(theme: Theme) => theme.palette.grayText}`,
  },
};

export default styles;
