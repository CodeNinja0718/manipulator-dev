import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  photoWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    margin: '10px 0px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundcolor: 'red',
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;
