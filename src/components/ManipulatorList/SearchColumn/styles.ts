import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  searchColumn: {
    pl: { xs: 20 },
    pr: { xs: 20, tablet: 0 },
    py: { xs: 0, tablet: 30 },
    width: { xs: '100%', tablet: '260px' },
    height: '100%',
  },
  searchColumnTitleBox: {
    pb: '10px',
    borderBottom: `3px solid `,
    borderBottomColor: 'orangeBold',
    display: 'block',
  },
  searchColumnBox: {
    bgcolor: 'cream',
    borderRadius: '5px',
    padding: { xs: '15px 15px 0px', tablet: '15px 15px 30px' },
    display: 'block',
    height: { xs: '100%', tablet: 'auto' },
    position: 'relative',
  },
  listItemButton: {
    color: (theme: Theme) => theme.palette.orangeText,
    padding: '8px 5px',
    borderRadius: '5px',
  },
  listItemText: {
    display: { xs: 'flex', tablet: 'block' },
    flexDirection: { xs: 'row', tablet: 'column' },
    alignItems: 'center',

    color: (theme: Theme) => theme.palette.text.primary,
    '& svg': {
      fontSize: '20px',
    },
    '&.Mui-selected': {
      backgroundColor: '#ffffff',

      '& .MuiListItemText-root': {
        '& .MuiListItemText-primary': {
          color: 'tertiary.main',
        },
      },
      '&:hover': {
        backgroundColor: 'rgb(234 101 0 / 20%)',
      },
    },
    '&.MuiButtonBase-root': {
      pl: '5px',
    },
    '& .MuiListItemText-primary': {
      flex: '0 0 84px',
    },
    '& .MuiListItemText-secondary': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'pre',
      fontSize: '14px',
    },
  },
  button: {
    marginTop: 30,
    width: 160,
    minHeight: 30,
    fontSize: 14,

    '& .MuiButton-startIcon': {
      left: 10,
      '& svg': {
        width: 14,
        height: 14,
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export default styles;