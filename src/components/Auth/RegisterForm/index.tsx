import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { TextField } from 'components/Form';
import Link from 'components/Link';
import { useForm } from 'react-hook-form';

import type { RegisterFormValues } from './schema';
import schema from './schema';
import styles from './styles';

const AuthForm = ({
  onSubmit,
}: {
  onSubmit: (values: RegisterFormValues) => void;
}) => {
  const { control, handleSubmit } = useForm<RegisterFormValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return (
    <Stack
      sx={styles.registerFormWrapper}
      alignItems="center"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="title" fontSize={24} mt={26} mb={32}>
        会員登録
      </Typography>
      <TextField
        label="電話番号で登録"
        name="phone"
        control={control}
        placeholder="09012345678"
        notched
      />
      <Typography fontSize={16} mt={26} mb={32}>
        会員登録することで、整体なびの<Link href="/">利用規約</Link>
        および<Link href="/">プライバシーポリシー</Link>に同意するものとします。
      </Typography>
      <LoadingButton
        size="medium"
        color="primary"
        variant="contained"
        type="submit"
        endIcon={<ArrowRight />}
        loadingPosition="end"
        sx={styles.submitBtn}
      >
        同意して登録・予約に進む
      </LoadingButton>
      <Link href="/login">ログインはこちら</Link>
    </Stack>
  );
};

export default AuthForm;