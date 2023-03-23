import IconFavoriteOff from '@icons/icon_favorite_off.svg';
import IconReview from '@icons/icon_review.svg';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { IManipulator } from 'models/manipulator/interface';
import Image from 'next/image';

import styles from './styles';

interface ManipulatorSummaryInfoProps {
  data?: IManipulator;
  hideFavoriteBtn?: boolean;
  hideRating?: boolean;
  sx?: SxProps<Theme>;
  className?: string;
}

const ManipulatorSummaryInfo: React.FC<ManipulatorSummaryInfoProps> = ({
  data,
  hideFavoriteBtn = false,
  hideRating = false,
  ...props
}) => {
  const salonInfo = data?.salon[0];
  return (
    <Stack direction="row" gap={20} {...props}>
      <Box sx={styles.avatarWrapper}>
        <Image
          src="/icons/default-avatar.svg"
          alt="Manipulator avatar"
          fill
          sizes="10vw"
        />
        {!hideFavoriteBtn && (
          <IconButton sx={styles.favoriteBtn}>
            <IconFavoriteOff />
          </IconButton>
        )}
      </Box>
      <Stack flex="1 1 auto">
        <Typography
          fontSize={18}
          fontWeight="bold"
          color="black"
          marginBottom={4}
        >
          {salonInfo?.name}
        </Typography>
        <Typography fontSize={14} fontWeight="bold">
          {salonInfo?.name}
        </Typography>
        <Typography fontSize={12} color="graySolid">
          {salonInfo?.access.map((text) => `${text}\n`)}
        </Typography>
        {!hideRating && (
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            gap={8}
            mt={4}
            sx={styles.ratingWrapper}
          >
            <Typography color="secondary.main" fontWeight="bold">
              ★ 0
            </Typography>
            <Typography fontSize={12} color="secondary.main" fontWeight="bold">
              <IconReview />
              レビュー
            </Typography>
            <Typography fontSize={12} color="graySolid">
              <b>0</b>件
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ManipulatorSummaryInfo;
