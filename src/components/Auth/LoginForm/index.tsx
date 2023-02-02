import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import { LoadingButton } from '@mui/lab';
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import { TextField } from 'components/Form';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { LoginFormValues } from './schema';
import schema from './schema';
import styles from './styles';

const AuthForm = ({
  onSubmit,
}: {
  onSubmit: SubmitHandler<LoginFormValues>;
}) => {
  const [memorized, setMemorized] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
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
            checked={memorized}
            onChange={(e) => setMemorized(e.target.checked)}
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
    </Stack>
  );
};

export default AuthForm;
