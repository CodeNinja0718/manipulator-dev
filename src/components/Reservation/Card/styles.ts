import type { SxProps, Theme } from '@mui/material/styles';

const styles: Record<string, SxProps<Theme>> = {
  reservationCardWrapper: {
    borderTopLeftRadius: '30px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  },
  cardHeader: {
    borderBottom: '1px solid',
    borderColor: 'silver',
    position: 'relative',
    '.manipulator-avatar': {
      position: 'absolute',
      top: 10,
      left: 9,
    },
    '.manipulative-info': {
      height: 40,
      lineHeight: '40px',
      borderTopLeftRadius: '30px',
      backgroundColor: 'placeholder',
      paddingLeft: 70,
      fontWeight: 'bold',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '.reservation-status': {
      lineHeight: '26px',
      height: 26,
      paddingLeft: 70,
      fontWeight: 'bold',
    },
    '&[data-active=true]': {
      '.manipulative-info': {
        backgroundColor: 'secondary.main',
      },
      '.reservation-status': {
        color: 'secondary.main',
      },
    },
  },
  actionBtn: {
    display: 'flex',
    gap: 10,
    color: 'black',
    textDecoration: 'none',
    alignItems: 'center',
    flexGrow: 0,
    flexDirection: {
      xs: 'column',
      tablet: 'row',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
    '.icon': {
      flexShrink: 0,
      width: 51,
      height: 51,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      svg: {
        width: 18,
        height: 23,
      },
    },
  },
};

export default styles;
