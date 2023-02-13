import IconFavoriteOff from '@icons/icon_favorite_off.svg';
import IconFavoriteOn from '@icons/icon_favorite_on.svg';
import IconReview from '@icons/icon_review.svg';
import { Box, Stack, Typography } from '@mui/material';
import type { IManipulator } from 'models/manipulator/interface';
import * as React from 'react';

import styles from './styles';

interface ManipulatorCardLeftProps {
  data: IManipulator;
}
const ManipulatorCardLeft = ({ data }: ManipulatorCardLeftProps) => {
  return (
    <Box sx={styles.colLeft}>
      <Typography sx={styles.averageRating} component="label">
        ★ {data.reviewRating.averageRating}
      </Typography>
      <Stack direction="column" spacing="20px">
        <Box sx={styles.colLeftItem}>
          {data.isFavorite ? <IconFavoriteOn /> : <IconFavoriteOff />}
          <Typography
            color="grayText"
            fontWeight="300"
            component="label"
            fontSize="12px"
          >
            登録済
          </Typography>
        </Box>
        <Box sx={styles.colLeftItem}>
          <IconReview />
          <Typography
            color="orangeText"
            fontWeight="300"
            component="label"
            fontSize="12px"
          >
            レビュー
          </Typography>
          <Typography
            color="grayText"
            fontWeight="600"
            component="label"
            fontSize="12px"
          >
            {data.reviewRating.total}件
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ManipulatorCardLeft;
