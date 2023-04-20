import { Grid, Typography } from "@mui/material";
import * as React from "react";

import styles from "./styles";

interface ManipulatorHeaderProps {
  resultTotal: number;
}

const ManipulatorHeader = ({ resultTotal = 0 }: ManipulatorHeaderProps) => {
  return (
    <Grid container spacing={2} marginBottom="30px" alignItems="center">
      <Grid item xs={3} tablet={5} display="flex" alignItems="center">
        <Typography sx={styles.resultTotal}>{resultTotal}</Typography>
        <span>件</span>
      </Grid>
    </Grid>
  );
};

export default ManipulatorHeader;
