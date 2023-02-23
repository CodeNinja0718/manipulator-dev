import { Grid, Typography } from '@mui/material';
import * as React from 'react';

import styles from '../styles';

interface LineInfoProps {
  title: string;
  text: string;
}
const LineInfo = ({ title, text }: LineInfoProps) => {
  return (
    <Grid container color="black">
      <Grid item xs={3} tablet={2}>
        <Typography component={'label'} sx={styles.labelStyle}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={9} tablet={10}>
        <Typography component={'span'}>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default LineInfo;
