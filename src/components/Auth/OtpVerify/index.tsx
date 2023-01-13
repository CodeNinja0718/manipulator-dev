import IconReload from '@icons/icon_reload.svg';
import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import styles from './styles';

const OTPVerify = ({
  onSubmit,
  onResendOtp,
  onBack,
  isLoading,
}: {
  onSubmit: (code: string) => void;
  onResendOtp: () => void;
  onBack: () => void;
  isLoading: boolean;
}) => {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    if (code.length === 6) {
      onSubmit(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <Stack alignItems="center" sx={styles.otpVerifyWrapper}>
      <Typography variant="title" fontSize={24} mt={26} mb={53}>
        認証コードの入力
      </Typography>
      <Typography fontSize={18} mb={10}>
        SMSで受信した認証番号を入力してください
      </Typography>
      <Typography fontSize={16} mb={32}>
        ※認証コードが届かない場合は、番号が正しいことを確認し、
        <br />
        コードの再送をお試しください。
      </Typography>
      <OtpInput
        numInputs={6}
        value={code}
        isDisabled={isLoading}
        containerStyle={{
          gap: 8,
        }}
        inputStyle={{
          width: 46,
          height: 62,
          borderRadius: 5,
          borderWidth: 1,
          fontSize: 24,
        }}
        shouldAutoFocus
        onChange={(values: any) => {
          setCode(values);
        }}
      />
      <Typography
        fontSize={16}
        mt={48}
        mb={30}
        color="primary"
        onClick={onResendOtp}
        sx={{
          cursor: 'pointer',
          textDecoration: 'underline',
          svg: {
            marginRight: 6,
          },
        }}
      >
        <IconReload />
        コードを再送する
      </Typography>
      <Typography
        fontSize={16}
        color="primary"
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

export default OTPVerify;
