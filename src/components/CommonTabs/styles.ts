import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  tabsContainer: {
    mb: 24,
    '& .customTabs': {
      '& .MuiTabs-indicator': {
        left: 'initial !important',
        width: 'initial !important',
      },
    },
  },
  tabList: {
    border: 'none',
    position: 'relative',
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      justifyContent: 'center',
      '& button': {
        maxWidth: 'initial',
        minWidth: 'initial',
      },
    },
    '&::after': {
      content: '""',
      background: (theme: Theme) => `${theme.palette.grownText}`,
      position: 'absolute',
      width: '100%',
      height: '1px',
      display: 'block',
      bottom: '1px',
    },
  },
  tabItem: {
    width: 'calc(50% - 5px)',
    minHeight: 50,
    color: (theme: Theme) => `${theme.palette.grownText}`,
    backgroundColor: (theme: Theme) => `${theme.palette.pink}`,
    borderRadius: '7px 7px 0 0',
    px: 'inherit',
    border: 'none',

    '&.Mui-selected': {
      position: 'relative',
      color: (theme: Theme) => `${theme.palette.orangeBold}`,
      backgroundColor: 'white',
      border: (theme: Theme) => `1px solid ${theme.palette.gray}`,
      borderBottom: 'none',
      zIndex: 1,

      '&::after': {
        content: '""',
        background: 'white',
        position: 'absolute',
        width: '100%',
        height: '1px',
        display: 'block',
        bottom: 0,
      },
    },

    '&:last-child': {
      ml: 10,
      mr: 0,
    },
  },
  underline: {
    position: 'relative',
    width: '100%',
    height: 1.2,
    background: 'white',
    transform: 'translateY(-1px)',
    zIndex: 1,
  },
  contentContainer: {
    overflow: 'auto',
    maxHeight: { xs: '44vh', tablet: '51vh' },
    mt: 28,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
