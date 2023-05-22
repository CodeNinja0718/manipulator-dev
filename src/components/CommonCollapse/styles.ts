import type { SxProps, Theme } from '@mui/material';
import { zen } from 'theme';

const styles: Record<string, SxProps<Theme>> = {
  collapseWrapper: {
    cursor: 'pointer',
    padding: '20px 20px 10px',
    gap: 10,
    '&:nth-of-type(2n)': {
      backgroundColor: 'cream',
    },
  },
  questionTitle: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    gap: 18,
    paddingRight: 24,
    '.question-mark': {
      fontFamily: zen.style.fontFamily,
      height: 31,
      width: 31,
      lineHeight: 1,
      display: 'flex',
      justifyContent: 'center',
      pt: 5,
      fontSize: 19,
      backgroundColor: 'primary.main',
      color: 'white',
      borderRadius: '50%',
      position: 'relative',
      flexShrink: 0,
      '&:after': {
        content: "''",
        width: 4,
        height: 4,
        transform: 'rotate(0deg) skew(15deg,15deg)',
        position: 'absolute',
        right: 2,
        bottom: 2,
        backgroundColor: 'primary.main',
      },
    },
    '.end-icon': {
      width: 24,
      height: 24,
      color: 'primary.main',
      position: 'absolute',
      right: 0,
    },
  },
  answerContent: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    '.answer-mark': {
      fontFamily: zen.style.fontFamily,
      color: '#EA6500',
      fontWeight: 'bold',
      fontSize: 19,
      width: 31,
      display: 'flex',
      justifyContent: 'center',
      flexShrink: 0,
    },
  },
};

export default styles;
