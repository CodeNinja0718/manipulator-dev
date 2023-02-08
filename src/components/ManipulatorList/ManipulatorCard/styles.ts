import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  manipulatorCard: {
    borderTopLeftRadius: 30,
    // boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    overflow: 'hidden',
    marginBottom: 40,
  },
  manipulatorCardContent: {
    display: 'flex',
    paddingBottom: 30,
    paddingTop: 15,
    border: '1px solid #ac9b93',
    borderBottomRightRadius: 10,
    borderTop: '0px',
  },
  colRight: {
    flex: '1 1 auto',
    paddingRight: 38,
  },
  buttonItemGroup: {
    borderRadius: '5px',
    fontSize: '14px',
    minHeight: '22px',
    padding: '2px 10px',
    minWidth: '85px',
    cursor: 'default',
  },
  button: {
    marginTop: 10,
    width: '226px',
    minHeight: '40px',
    fontSize: '16px',

    '& .MuiButton-endIcon': {
      '& svg': {
        height: 12,
      },
    },
  },
  labelStyle: {
    color: 'orangeText',
    fontWeight: '600',
    fontSize: '14px',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
