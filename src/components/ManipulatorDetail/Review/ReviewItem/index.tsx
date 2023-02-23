import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';

import Stars from '../Stars';

const ReviewItem = () => {
  return (
    <Box bgcolor={'white'} p={15} marginBottom={10}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar alt="name" src={''} sx={{ width: 30, height: 30 }} />
        </Grid>
        <Grid item xs={11}>
          <Typography
            color="black"
            fontWeight="600"
            component="label"
            fontSize="16px"
          >
            レビュータイトル
          </Typography>
          <Stack spacing={6} direction={'row'} alignItems="center">
            <Typography color="graySolid" component="span" fontSize="12px">
              2022/10/31
            </Typography>
            <Stars star={4} />
          </Stack>
          <Typography
            color="black"
            component="p"
            fontSize="14px"
            marginTop={12}
          >
            [メニュー名]を利用
          </Typography>
          <Typography
            color="black"
            component="p"
            fontSize="14px"
            marginTop={12}
          >
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewItem;
