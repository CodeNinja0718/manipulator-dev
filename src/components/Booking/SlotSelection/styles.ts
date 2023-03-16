import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  bookingSlotWrapper: {
    mt: {
      xs: 7,
      tablet: 11,
    },
  },
  selectedMenu: {
    color: 'black',
    backgroundColor: 'cream',
    borderRadius: '5px',
    padding: 10,
    fontSize: 14,
    mb: {
      xs: 20,
      tablet: 38,
    },
  },
  dateControl: {
    mb: 8,
    '.control-btn': {
      fontSize: 12,
      display: 'flex',
      alignItems: 'center',
      color: 'black',
      cursor: 'pointer',
      svg: {
        width: 12,
        height: 12,
      },
      '&[data-disabled="true"]': {
        cursor: 'not-allowed',
        color: 'graySolid',
        pointerEvents: 'none',
      },
    },
  },
  slotTableWrapper: {
    position: 'relative',
  },
  loadingBar: {
    position: 'absolute',
    width: '100%',
  },
  slotHeader: {
    height: 51,
    borderWidth: '1px 0',
    borderStyle: 'solid',
    borderColor: 'silver',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    span: {
      fontSize: 12,
      fontWeight: 'normal',
    },
    '&[data-current=true]': {
      backgroundColor: '#ffd9a1',
    },
  },
  slotCell: {
    color: 'black',
    height: 54,
    fontSize: 14,
    fontWeight: 'bold',
    '&:nth-of-type(2n + 1)': {
      backgroundColor: 'cream',
    },
    '&[data-current=true]': {
      backgroundColor: '#ffd9a1',
    },
  },
  slotBtn: {
    borderRadius: '3px',
    padding: 0,
  },
  backStep: {
    mt: 33,
    fontSize: 14,
    color: 'black',
    cursor: 'pointer',
    svg: {
      width: 12,
      height: 12,
    },
    textAlign: 'center',
  },
};

export default styles;
