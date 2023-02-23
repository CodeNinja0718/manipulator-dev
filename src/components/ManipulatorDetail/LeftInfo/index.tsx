import ArrowIcon from '@icons/arrow.svg';
import IconFavoriteOff from '@icons/icon_favorite_off.svg';
import IconReview from '@icons/icon_review.svg';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import * as React from 'react';

import styles from './styles';

const LeftInfo = () => {
  return (
    <Box sx={styles.leftInfo}>
      <Grid container spacing={20}>
        <Grid item xs="auto" position={'relative'}>
          <Avatar alt="name" src={''} sx={styles.avatar} />
          <Box sx={styles.favoriteBtn}>
            <IconFavoriteOff />
          </Box>
        </Grid>
        <Grid item xs>
          <Typography
            component="h3"
            fontWeight={'500'}
            fontSize="18px"
            marginBottom={2}
          >
            整体師太郎
          </Typography>
          <Typography
            component="label"
            fontWeight={'600'}
            fontSize="14px"
            marginBottom={2}
          >
            快適整体院
          </Typography>
          <Typography
            component="p"
            fontSize="12px"
            color="graySolid"
            marginBottom={5}
          >
            東急東横線 渋谷駅 徒歩10分
          </Typography>
          <Stack direction={'row'} alignItems="center" spacing={8}>
            <Typography sx={styles.averageRating} component="label">
              ★ 4.5
            </Typography>
            <Box
              sx={{
                svg: { width: 18, height: 18, position: 'relative', top: 2 },
              }}
              display="flex"
              alignItems="center"
            >
              <IconReview />
              <Typography
                color="orangeText"
                fontWeight="300"
                component="label"
                fontSize="12px"
              >
                レビュー
              </Typography>
            </Box>
            <Typography
              color="grayText"
              fontWeight="300"
              component="label"
              fontSize="12px"
            >
              999件
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box textAlign="center" marginTop="20px">
        <Button
          onClick={() => {}}
          variant="contained"
          sx={styles.button}
          endIcon={
            <SvgIcon
              component={ArrowIcon}
              viewBox="0 0 14 30"
              color="inherit"
            />
          }
        >
          今すぐ予約
        </Button>
      </Box>
    </Box>
  );
};

export default LeftInfo;
