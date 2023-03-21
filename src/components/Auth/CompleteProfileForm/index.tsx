import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import MembershipSvg from '@icons/icon_membership.svg';
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { DatePicker, Select, TextField } from 'components/Form';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { GENDER_OPTIONS } from 'utils/const';

import type { CompleteProfileFormValues } from './schema';
import schema from './schema';
import styles from './styles';

const NavigationMenu = dynamic(
  () => import('components/Layout/NavigationMenu'),
);

const CompleteProfileForm = ({
  onSubmit,
  onBack,
  initialValues,
  isUpdateProfile = false,
  loading = false,
}: {
  onSubmit: SubmitHandler<CompleteProfileFormValues>;
  onBack?: () => void;
  initialValues: CompleteProfileFormValues;
  isUpdateProfile?: boolean;
  loading?: boolean;
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<CompleteProfileFormValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: initialValues,
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  return (
    <Stack
      alignItems="center"
      sx={styles.completeProfileFormWrapper}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="title" fontSize={24} mb={60} sx={styles.title}>
        <MembershipSvg />
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
        label="携帯番号"
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
        disabled={isUpdateProfile}
        placeholder="メールアドレス"
        type="email"
        required
      />
      <DatePicker
        label="生年月日"
        name="birthday"
        control={control}
        required
        disableFuture
        PopperProps={{
          placement: 'bottom-end',
        }}
      />
      <Select
        label="性別"
        name="gender"
        control={control}
        placeholder="性別"
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
        loading={loading}
        disabled={!isDirty || !isValid}
      >
        変更する
      </LoadingButton>
      {onBack && (
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
      )}
      {isUpdateProfile && <NavigationMenu mt={40} />}
    </Stack>
  );
};

export default CompleteProfileForm;
