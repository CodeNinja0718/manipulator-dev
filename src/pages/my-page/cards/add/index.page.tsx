import { yupResolver } from '@hookform/resolvers/yup';
import ArrowRight from '@icons/arrow-right.svg';
import PaymentSvg from '@icons/icon_payment.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import { Stack, Typography } from '@mui/material';
import { MaskedField } from 'components/Form';
import Layout from 'components/Layout';
import useMutate from 'hooks/useMutate';
import cardQuery from 'models/card/query';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { AddCardFormValues } from './schema';
import schema from './schema';
import styles from './styles';

const NavigationMenu = dynamic(
  () => import('components/Layout/NavigationMenu'),
);

const AddCardPage = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<AddCardFormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { mutateAsync: getCardToken, isLoading: isGettingToken } = useMutate<
    AddCardFormValues,
    { token: string }
  >(cardQuery.getCardToken);
  const { mutateAsync: addCard, isLoading: isAddingCard } = useMutate<{
    token: string;
    type: string;
  }>(cardQuery.addCard);

  const handleAddCard: SubmitHandler<AddCardFormValues> = async (values) => {
    const data = await getCardToken({
      ...values,
      card_number: values.card_number.trim(),
      security_code: values.security_code.trim(),
    });
    addCard(
      { token: data.token, type: 'CARD' },
      {
        onSuccess: () => {
          router.push('/my-page/cards');
        },
      },
    );
  };

  return (
    <Stack alignItems="center" sx={styles.addCardPageWrapper}>
      <Typography variant="title" sx={styles.title}>
        <PaymentSvg /> クレジットカード編集
      </Typography>
      <Image
        src="/images/card_brand.webp"
        alt="Card support"
        width={260}
        height={31}
      />
      <Stack component="form" onSubmit={handleSubmit(handleAddCard)} pt={20}>
        <MaskedField
          label="カード番号"
          name="card_number"
          format="###################"
          control={control}
          inputProps={{
            placeholder: '1234567890123456',
          }}
        />
        <Stack direction="row" gap={11}>
          <MaskedField
            label="有効期限"
            name="card_expire"
            control={control}
            format="##/##"
            inputProps={{
              placeholder: 'MM/YY',
            }}
          />
          <MaskedField
            label="セキュリティコード"
            name="security_code"
            control={control}
            format="####"
            inputProps={{
              placeholder: '123',
            }}
          />
        </Stack>
        <Typography fontSize={14} mb={{ xs: 15, tablet: 8 }} color="black">
          ※セキュリティコードとは裏面の署名欄に印字されている3桁の番号のことです
        </Typography>
        {!isValid && (
          <Typography sx={styles.cardNote} color="error">
            ※カード決済は施術が終わった後に行われます
          </Typography>
        )}
        <LoadingButton
          sx={styles.submitBtn}
          fullWidth
          variant="contained"
          endIcon={<ArrowRight />}
          type="submit"
          loading={isGettingToken || isAddingCard}
        >
          登録する
        </LoadingButton>
      </Stack>
      <NavigationMenu mt={60} />
    </Stack>
  );
};

AddCardPage.getLayout = (page: React.ReactNode) => {
  return (
    <Layout isCardLayout withSideMenu>
      {page}
    </Layout>
  );
};

export default AddCardPage;
