import LoginForm from 'components/Auth/LoginForm';
import type { LoginFormValues } from 'components/Auth/LoginForm/schema';
import OtpVerify from 'components/Auth/OtpVerify';
import Layout from 'components/Layout';
import { useMutate, useUser } from 'hooks';
import type { SendOtpPayload, VerifyOtpPayload } from 'models/auth/interface';
import authQuery from 'models/auth/query';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import Helper from 'utils/helpers';

const LoginPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  const [phoneRemeber, setPhoneRemeber] = useState<string>('');
  const { refetch: refetchUser } = useUser({ enabled: false });
  const { mutateAsync: handleSendOtp } = useMutate<SendOtpPayload>(
    authQuery.loginSendOtp,
  );
  const { mutateAsync: handleVerifyOtp, isLoading } = useMutate<
    VerifyOtpPayload,
    {
      accessToken: string;
      refreshToken: string;
    }
  >(authQuery.loginVerifyOtp);
  const initialValues = useMemo(
    () => ({
      phone: phoneRemeber,
    }),
    [phoneRemeber],
  );

  useEffect(() => {
    const phoneRemember = localStorage.getItem('remember');
    if (phoneRemember) {
      setRemember(!!phoneRemember);
      setPhoneRemeber(phoneRemember);
    }
  }, []);

  const handleLogin: SubmitHandler<LoginFormValues> = (values) => {
    handleSendOtp(
      { phoneNumber: values.phone },
      {
        onSuccess: () => {
          setPhone(values.phone);
        },
      },
    );
  };

  const handleResendOtp = () => {
    handleSendOtp({
      phoneNumber: phone,
    });
  };

  const handleVerify = (code: string) => {
    handleVerifyOtp(
      {
        identity: phone,
        password: code,
      },
      {
        onSuccess: (data) => {
          if (remember) {
            localStorage.setItem('remember', phone);
          } else {
            localStorage.removeItem('remember');
          }
          Helper.setToken({
            token: data?.accessToken || data?.refreshToken,
          });
          refetchUser();
          router.replace('/');
        },
      },
    );
  };

  if (phone) {
    return (
      <OtpVerify
        onSubmit={handleVerify}
        onResendOtp={handleResendOtp}
        onBack={() => setPhone('')}
        isLoading={isLoading}
      />
    );
  }
  return (
    <LoginForm
      initialValues={initialValues}
      onSubmit={handleLogin}
      remember={remember}
      handleToggleRemember={(e) => setRemember(e.target.checked)}
    />
  );
};

LoginPage.getLayout = (page: React.ReactNode) => {
  return <Layout isCardLayout>{page}</Layout>;
};

export default LoginPage;
