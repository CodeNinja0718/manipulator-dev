import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  calendar: {
    width: 338,
    mt: 11,
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      boxShadow: 'inset 2px 2px 4px 0 rgba(51, 51, 51, 0.15)',
      pr: 22,
      ' input': {
        '&::placeholder': {
          opacity: 1,
          fontWeight: 600,
        },
      },
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: (theme: Theme) => `${theme.palette.grullo}`,
    },
  },
};

export default styles;
