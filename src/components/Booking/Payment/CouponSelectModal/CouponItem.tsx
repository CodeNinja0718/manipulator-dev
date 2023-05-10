import { Box, Radio, Stack, Typography, useRadioGroup } from '@mui/material';
import dayjs from 'dayjs';
import type { ICoupon } from 'models/discount/interface';
import React from 'react';
import { DateFormat } from 'utils/const';

import styles from './styles';

interface CouponItemProps {
  data: ICoupon;
}

const CouponItem = ({ data }: CouponItemProps) => {
  const expiredDate = dayjs(data.expiredAt).format(DateFormat.YEAR_MONTH_DATE);
  const radioGroup = useRadioGroup();

  const checked = radioGroup && radioGroup.value === data.code;

  return (
    <Stack component={'label'}>
      <Box
        display={'flex'}
        alignItems={'flex-start'}
        sx={styles.listItemWrapper}
      >
        <Radio checked={checked} value={data.code} />
        <Box>
          <Typography fontSize={16} fontWeight={'bold'} color={'red'}>
            {data.title}
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={'bold'}
          >{`有効期限：${expiredDate}`}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default CouponItem;
