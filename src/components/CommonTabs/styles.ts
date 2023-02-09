import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  tabsContainer: {
    '& .customTabs': {
      '& .MuiTabs-indicator': {
        left: 'initial !important',
        width: 'initial !important',
      },
    },
  },
  tabList: {
    border: 'none',
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      justifyContent: 'center',
      '& button': {
        maxWidth: 'initial',
        minWidth: 'initial',
      },
    },
  },
  tabItem: {
    width: 'calc(50% - 5px)',
    minHeight: 50,
    border: 'none',
    color: (theme: Theme) => `${theme.palette.grownText}`,
    backgroundColor: (theme: Theme) => `${theme.palette.pink}`,
    borderRadius: '5px 5px 0 0',
    transform: 'translateY(1px)',
    px: 'inherit',

    '&.Mui-selected': {
      position: 'relative',
      color: (theme: Theme) => `${theme.palette.orangeBold}`,
      backgroundColor: 'white',
      border: (theme: Theme) => `1px solid ${theme.palette.gray}`,
      borderBottomColor: 'white',
      zIndex: 1,
    },

    '&:last-child': {
      ml: 10,
      mr: 0,
    },
  },
  underline: {
    width: '100%',
    height: { xs: '0.5px', mobile: '1px' },
    background: (theme: Theme) => `${theme.palette.gray}`,
    transform: 'translateY(-1.5px)',
  },
  contentContainer: {
    overflow: 'auto',
    maxHeight: { xs: '55vh', tablet: '51vh' },
    mt: 28,
  },
} as Record<string, SxProps<Theme>>;

export default styles;
