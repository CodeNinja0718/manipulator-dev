import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  boxContainer: {
    width: 97,
    cursor: 'pointer',
  },
  circleBox: (theme: Theme) => ({
    background: 'white',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
    borderRadius: '50%',
    '&:hover, &:active, &:focus': {
      transition: '.5s',
      background: theme.palette.orangeBold,

      '& svg': {
        color: 'white',
      },
    },
  }),
  circleBoxActive: (theme: Theme) => ({
    background: theme.palette.orangeBold,
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
    borderRadius: '50%',
  }),
  icon: {
    fontSize: '1rem',
    width: 53,
    height: 57,
  },
  labelText: {
    mt: 10,
    textAlign: 'center',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
