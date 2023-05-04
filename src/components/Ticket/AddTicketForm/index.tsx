import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import { LoadingButton } from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';
import { Select } from 'components/Form';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import CardSelect from './CardSelect';
import styles from './styles';
import TicketReview from './TicketReview';

const COUPONS = [
  { id: 1, name: '整体10回コース（目安時間：30分）' },
  { id: 2, name: '整体10回コース（目安時間：29分）' },
  { id: 3, name: '整体10回コース（目安時間：28分）' },
];

const schema = yup.object().shape({
  couponId: yup.string().required(),
});

const AddTicketForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Stack sx={styles.couponFormContainer} pt={60} display={'flex'}>
      <Select
        label="メニューを選択してください"
        placeholder="メニューを選択してください"
        name="couponId"
        control={control}
        data={COUPONS}
        required
      />
      <Typography fontSize={14} fontWeight={'bold'}>
        ※補足テキスト欄（不要であれば削除）
      </Typography>

      <TicketReview />
      <CardSelect />

      <Box display={'flex'} justifyContent={'center'} mt={32}>
        <LoadingButton
          size="medium"
          color="primary"
          variant="contained"
          type="submit"
          endIcon={<ArrowRight />}
          loadingPosition="end"
          sx={styles.submitBtn}
        >
          回数券を購入する
        </LoadingButton>
      </Box>
    </Stack>
  );
};

export default AddTicketForm;
