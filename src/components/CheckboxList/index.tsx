import Box from '@mui/material/Box';
import React from 'react';

import styles from './styles';

interface CheckboxListProps {
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}

const CheckboxList = ({ leftComponent, rightComponent }: CheckboxListProps) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftComponent}>{leftComponent}</Box>
      <Box sx={styles.rightComponent}>{rightComponent}</Box>
    </Box>
  );
};
export default CheckboxList;
