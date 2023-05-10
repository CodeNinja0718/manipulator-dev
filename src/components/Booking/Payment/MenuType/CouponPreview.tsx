import { Box, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import type { ICoupon } from 'models/discount/interface';
import React from 'react';
import { DateFormat } from 'utils/const';

import styles from './styles';

interface CouponPreviewProps {
  data: ICoupon;
}

const CouponPreview = ({ data }: CouponPreviewProps) => {
  const expiredDate = dayjs(data.expiredAt).format(DateFormat.YEAR_MONTH_DATE);
  return (
    <Stack
      display={'flex'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      bgcolor={'white'}
      sx={styles.couponContainer}
    >
      <Box sx={styles.couponTitle}>
        <Typography fontSize={16} fontWeight={'bold'} color={'white'}>
          {data.title}
        </Typography>
      </Box>
      <Box sx={styles.couponExpiredDate}>
        <Typography fontSize={14} fontWeight={'bold'}>
          {`有効期限：${expiredDate}`}
        </Typography>
      </Box>
      <Stack spacing={4} sx={styles.couponDescription}>
        <Typography fontWeight={'bold'} fontSize={18} color={'red'}>
          {`支払額から${data.amount}円OFF`}
        </Typography>
        <Typography fontWeight={'bold'} fontSize={14}>
          ※他のクーポンと併用はできません。
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CouponPreview;
