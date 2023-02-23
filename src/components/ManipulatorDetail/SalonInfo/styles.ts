import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  titleSalon: {
    color: 'orange.main',
    display: 'inline-flex',
    marginRight: 10,
    svg: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 600,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
