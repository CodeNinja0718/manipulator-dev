import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  paginationWrapper: {
    a: {
      textDecoration: 'none',
    },
    '.MuiPagination-ul': {
      gap: 10,
    },
    '.MuiButtonBase-root': {
      height: 30,
      width: 30,
      borderRadius: '5px',
      margin: 0,
      border: 0,
      fontWeight: 'bold',
      fontSize: 16,
      color: 'graySolid',
    },
    '.MuiPaginationItem-previousNext': {
      border: '1px solid',
      borderColor: 'placeholder',
    },
    '.MuiPaginationItem-root.Mui-selected': {
      color: 'white',
      backgroundColor: 'secondary.main',
    },
  },
};

export default styles;
