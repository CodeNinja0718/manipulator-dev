import CompleteProfileForm from 'components/Auth/CompleteProfileForm';
import type { CompleteProfileFormValues } from 'components/Auth/CompleteProfileForm/schema';
import Layout from 'components/Layout';
import { useMutate, useUser } from 'hooks';
import { pick } from 'lodash';
import type { CustomerUpdateProfilePayload } from 'models/auth/interface';
import authQuery from 'models/auth/query';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';

const MyProfilePage = () => {
  const { data, refetch, isLoading: isLoadingProfile } = useUser();
  const { mutateAsync: updateProfile, isLoading } =
    useMutate<CustomerUpdateProfilePayload>(authQuery.updateProfile);

  const handleUpdateProfile: SubmitHandler<CompleteProfileFormValues> = (
    values,
  ) => {
    const params = pick(values, ['name', 'nameKana', 'birthday', 'gender']);
    updateProfile(
      {
        ...params,
        gender: params.gender || 0,
      },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };

  return (
    <CompleteProfileForm
      initialValues={{
        name: data?.name || '',
        nameKana: data?.nameKana || '',
        phone: data?.phone || '',
        gender: data?.gender,
        birthday: data?.birthday || '',
        email: data?.email || '',
      }}
      isUpdateProfile
      loading={isLoading || isLoadingProfile}
      onSubmit={handleUpdateProfile}
    />
  );
};

MyProfilePage.getLayout = (page: React.ReactNode) => (
  <Layout isCardLayout withSideMenu>
    {page}
  </Layout>
);

export default MyProfilePage;
