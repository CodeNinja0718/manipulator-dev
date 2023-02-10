import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import * as React from 'react';

import type { ManipulatorCardModel } from '../model';
import styles from './styles';

interface ManipulatorCardHeaderProps {
  data: ManipulatorCardModel;
}
const ManipulatorCardHeader = ({ data }: ManipulatorCardHeaderProps) => {
  return (
    <Box sx={styles.header}>
      <Box sx={styles.headerAbove} bgcolor="orange.main">
        <Typography component="h3" fontWeight={'600'}>
          {data.name}
        </Typography>
        <IconButton component="label" sx={styles.headerAboveBtn}>
          <ChevronRightIcon color="inherit" />
        </IconButton>
      </Box>
      {/* <Box sx={styles.headerBellow} fontWeight={'600'}></Box> */}
      <Avatar alt={data.name} src={data.avatar} sx={styles.avatar} />
    </Box>
  );
};

export default ManipulatorCardHeader;
