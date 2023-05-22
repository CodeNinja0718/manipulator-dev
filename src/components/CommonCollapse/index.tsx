import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Collapse, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import styles from './styles';

interface CommonCollapseProps {
  title?: string;
  content?: string;
}

const CommonCollapse = ({ title, content }: CommonCollapseProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Stack sx={styles.collapseWrapper} onClick={handleChange}>
      <Typography
        component="div"
        sx={styles.questionTitle}
        color="black"
        fontWeight="bold"
      >
        <Box className="question-mark">Q</Box>
        {title}
        {checked ? (
          <RemoveIcon className="end-icon" />
        ) : (
          <AddIcon className="end-icon" />
        )}
      </Typography>
      <Collapse in={checked}>
        <Typography component="div" color="black" sx={styles.answerContent}>
          <Box className="answer-mark">A</Box>
          {content}
        </Typography>
      </Collapse>
    </Stack>
  );
};
export default CommonCollapse;
