import type { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const styles = {
  licencesWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: '1 1 auto',
    gap: '5px',
    color: (theme: Theme) => alpha(theme.palette.grayText, 0.5),
  },
  labelItem: {
    borderRadius: '2px',
    fontSize: '14px',
    minHeight: '22px',
    padding: '2px 6px',
    minWidth: '83px',
    cursor: 'default',
    boxShadow: 'none !important',
    pointerEvents: 'none',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
