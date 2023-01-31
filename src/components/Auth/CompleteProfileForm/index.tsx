import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { DatePicker, Select, TextField } from 'components/Form';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { GENDER_OPTIONS } from 'utils/const';

import type { CompleteProfileFormValues } from './schema';
import schema from './schema';
import styles from './styles';

const CompleteProfileForm = ({
  onSubmit,
  onBack,
  initialValues,
}: {
  onSubmit: SubmitHandler<CompleteProfileFormValues>;
  onBack: () => void;
  initialValues: CompleteProfileFormValues;
}) => {
  const { control, handleSubmit } = useForm<CompleteProfileFormValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: initialValues,
  });
  return (
    <Stack
      alignItems="center"
      sx={styles.completeProfileFormWrapper}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="title" fontSize={24} mt={26} mb={32}>
        会員登録
      </Typography>
      <TextField
        label="氏名"
        name="name"
        control={control}
        placeholder="氏名"
        required
      />
      <TextField
        label="ふりがな"
        name="nameKana"
        control={control}
        placeholder="ふりがな"
        required
      />
      <TextField
        label="電話番号で登録"
        name="phone"
        control={control}
        disabled
        placeholder="09012345678"
        required
      />
      <TextField
        label="メールアドレス"
        name="email"
        control={control}
        placeholder="メールアドレス"
        type="email"
        required
      />
      <DatePicker
        label="Birthday"
        name="birthday"
        control={control}
        required
        disableFuture
        PopperProps={{
          placement: 'bottom-end',
        }}
      />
      <Select
        label="Gender"
        name="gender"
        control={control}
        placeholder="Gender"
        data={GENDER_OPTIONS}
        required
      />
      <LoadingButton
        size="medium"
        color="primary"
        variant="contained"
        type="submit"
        endIcon={<ArrowRight />}
        loadingPosition="end"
        sx={styles.submitBtn}
      >
        変更する
      </LoadingButton>
      <Typography
        fontSize={16}
        color="primary"
        mt={16}
        onClick={onBack}
        sx={{
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        {'< 電話番号を再入力する'}
      </Typography>
    </Stack>
  );
};

export default CompleteProfileForm;
