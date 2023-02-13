import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import type { IManipulator } from 'models/manipulator/interface';
import * as React from 'react';
import { PHOTO_TYPE_VALUE } from 'utils/const';

import styles from './styles';

interface ManipulatorCardHeaderProps {
  data: IManipulator;
}
const ManipulatorCardHeader = ({ data }: ManipulatorCardHeaderProps) => {
  const avatar = data.photos?.find(
    (item) => item.type === PHOTO_TYPE_VALUE.avatar,
  )?.url;
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
      <Avatar alt={data.name} src={avatar || ''} sx={styles.avatar} />
    </Box>
  );
};

export default ManipulatorCardHeader;
