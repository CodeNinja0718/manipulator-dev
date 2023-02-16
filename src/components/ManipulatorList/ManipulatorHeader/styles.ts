import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  resultTotal: {
    display: 'inline-block',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sortTitle: {
    fontSize: 14,
    mr: 10,
  },
  buttonItemGroup: {
    borderRadius: '5px',
    fontSize: '14px',
    minHeight: '30px',
    boxShadow: 'none !important',
    border: '1px solid #999999',
    padding: '8px 10px',
    minWidth: '90px !important',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
