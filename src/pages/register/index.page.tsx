import OtpVerify from 'components/Auth/OtpVerify';
import RegisterForm from 'components/Auth/RegisterForm';
import type { RegisterFormValues } from 'components/Auth/RegisterForm/schema';
import Layout from 'components/Layout';
import useMutate from 'hooks/useMutate';
import authQuery from 'models/auth/query';
import { useState } from 'react';

const RegisterPage = () => {
  const [phone, setPhone] = useState<string | undefined>();
  const { mutateAsync: handleSendOtp } = useMutate(authQuery.registerSendOtp);
  const { mutateAsync: handleVerifyOtp, isLoading } = useMutate(
    authQuery.registerVerifyOtp,
  );

  const handleRegister = (values: RegisterFormValues) => {
    handleSendOtp(
      {
        phoneNumber: values.phone,
      },
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
    handleVerifyOtp({
      code,
      phoneNumber: phone,
    });
  };

  if (phone) {
    return (
      <OtpVerify
        onSubmit={handleVerify}
        onResendOtp={handleResendOtp}
        onBack={() => setPhone(undefined)}
        isLoading={isLoading}
      />
    );
  }
  return <RegisterForm onSubmit={handleRegister} />;
};

RegisterPage.getLayout = (page: React.ReactNode) => {
  return <Layout isCard>{page}</Layout>;
};

export default RegisterPage;
