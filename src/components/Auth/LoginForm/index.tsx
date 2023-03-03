import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import { LoadingButton } from '@mui/lab';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { TextField } from 'components/Form';
import Link from 'components/Link';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { LoginFormValues } from './schema';
import schema from './schema';
import styles from './styles';

const AuthForm = ({
  initialValues,
  onSubmit,
  remember = false,
  handleToggleRemember,
}: {
  initialValues: LoginFormValues;
  onSubmit: SubmitHandler<LoginFormValues>;
  remember: boolean;
  handleToggleRemember: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: initialValues,
  });

  return (
    <Stack
      sx={styles.loginFormWrapper}
      alignItems="center"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="title" fontSize={24} mt={26} mb={32}>
        ログイン
      </Typography>
      <TextField
        label="電話番号を入力"
        name="phone"
        control={control}
        placeholder="09012345678"
      />
      <FormControlLabel
        sx={styles.checkboxControlWrapper}
        control={
          <Checkbox
            checked={remember}
            onChange={handleToggleRemember}
            sx={styles.checkboxSx}
          />
        }
        label="ログイン状態を保持"
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
        次へ
      </LoadingButton>
      <Link href="/register">新規登録はこちら</Link>
    </Stack>
  );
};

export default AuthForm;
