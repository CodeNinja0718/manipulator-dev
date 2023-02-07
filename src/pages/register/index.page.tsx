import CompleteProfileForm from 'components/Auth/CompleteProfileForm';
import type { CompleteProfileFormValues } from 'components/Auth/CompleteProfileForm/schema';
import OtpVerify from 'components/Auth/OtpVerify';
import RegisterForm from 'components/Auth/RegisterForm';
import type { RegisterFormValues } from 'components/Auth/RegisterForm/schema';
import Layout from 'components/Layout';
import { useMutate } from 'hooks';
import type {
  CustomerRegisterPayload,
  SendOtpPayload,
  VerifyOtpPayload,
} from 'models/auth/interface';
import authQuery from 'models/auth/query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';

const RegisterPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const { mutateAsync: handleSendOtp } = useMutate<SendOtpPayload>(
    authQuery.registerSendOtp,
  );
  const { mutateAsync: handleVerifyOtp, isLoading } = useMutate<
    VerifyOtpPayload,
    {
      token: string;
    }
  >(authQuery.registerVerifyOtp);
  const { mutateAsync: handleCustomerRegister } =
    useMutate<CustomerRegisterPayload>(authQuery.customerRegister);

  const handleRegister: SubmitHandler<RegisterFormValues> = (
    values: RegisterFormValues,
  ) => {
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
    handleVerifyOtp(
      {
        code,
        phoneNumber: phone,
      },
      {
        onSuccess: (data) => {
          setToken(data.token);
        },
      },
    );
  };

  const handleCompleteRegister: SubmitHandler<CompleteProfileFormValues> = (
    values,
  ) => {
    handleCustomerRegister(
      {
        ...values,
        phone,
        token,
      },
      {
        onSuccess: () => {
          router.push('/login');
        },
      },
    );
  };

  if (token) {
    return (
      <CompleteProfileForm
        initialValues={{
          name: '',
          nameKana: '',
          phone,
          gender: 0,
          birthday: '',
          email: '',
        }}
        onBack={() => {
          setPhone('');
          setToken('');
        }}
        onSubmit={handleCompleteRegister}
      />
    );
  }
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
  return <RegisterForm onSubmit={handleRegister} />;
};

RegisterPage.getLayout = (page: React.ReactNode) => {
  return <Layout isCardLayout>{page}</Layout>;
};

export default RegisterPage;
