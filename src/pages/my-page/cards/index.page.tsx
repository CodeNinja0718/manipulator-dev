import ArrowRight from '@icons/arrow-right.svg';
import PaymentSvg from '@icons/icon_payment.svg';
import TrashBoxSvg from '@icons/icon_trashbox.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Radio, Skeleton, Stack, Typography } from '@mui/material';
import Layout from 'components/Layout';
import { useFetch, useMutate } from 'hooks';
import useGlobalState from 'hooks/useGlobalState';
import isEmpty from 'lodash/isEmpty';
import type { ICardItem } from 'models/card/interface';
import cardQuery from 'models/card/query';
import Link from 'next/link';
import React from 'react';
import Helper from 'utils/helpers';

import styles from './styles';

const CardListPage = () => {
  const { setConfirmModal } = useGlobalState();

  const { isLoading, data, refetch } = useFetch<{ items: ICardItem[] }>({
    ...cardQuery.cardList,
  });
  const { mutateAsync: handleDeleteCard, isLoading: deleting } = useMutate(
    cardQuery.deleteCard,
  );

  const handleRemoveCard = (id: string) => {
    setConfirmModal({
      title: 'お支払い方法の削除',
      onConfirm: () => {
        handleDeleteCard(
          {
            id,
            type: 'CARD',
          },
          {
            onSuccess: () => {
              refetch();
            },
          },
        );
      },
      content: 'このクレジットカード情報を削除しますか？',
    });
  };

  const renderCardList = () => {
    if (isLoading) {
      return (
        <Stack sx={styles.cardListWrapper} gap={32}>
          <Skeleton variant="rounded" height={50} />
          <Skeleton variant="rounded" height={50} />
        </Stack>
      );
    }
    if (!isLoading && isEmpty(data?.items)) {
      return (
        <Stack
          sx={styles.cardListWrapper}
          alignItems="center"
          justifyContent="center"
        >
          <Typography>クレジットカード情報がありません</Typography>
        </Stack>
      );
    }
    return (
      <Stack sx={styles.cardListWrapper} gap={19}>
        {data?.items?.map((item) => (
          <Box key={item.id} sx={styles.cardItem}>
            <Stack
              direction="row"
              alignItems="center"
              className="card-info"
              data-selected={item?.details?.default}
            >
              <Radio checked={item?.details?.default} sx={styles.radioBtn} />
              <Stack
                ml={8}
                sx={{ width: '100%' }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Typography>
                  {item?.details?.brand}
                  &nbsp;&nbsp;&nbsp;
                  {Helper.formatCardNumberText(item?.details?.lastNumber)}
                </Typography>
                <Typography fontSize={14}>
                  有効期限：{item?.details?.expireMonth}/
                  {item?.details?.expireYear}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" mt={10}>
              <Typography
                sx={styles.removeCard}
                onClick={() => handleRemoveCard(item.id)}
              >
                <TrashBoxSvg />
                削除
              </Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    );
  };

  return (
    <Stack alignItems="center" sx={styles.cardListPageWrapper}>
      <Typography variant="title" sx={styles.title}>
        <PaymentSvg /> クレジットカード情報
      </Typography>
      {renderCardList()}
      <LoadingButton
        sx={styles.addCardBtn}
        component={Link}
        fullWidth
        variant="contained"
        endIcon={<ArrowRight />}
        loading={isLoading || deleting}
        href="/my-page/cards/add"
      >
        新しくカードを登録する
      </LoadingButton>
    </Stack>
  );
};

CardListPage.getLayout = (page: React.ReactNode) => (
  <Layout isCardLayout withSideMenu>
    {page}
  </Layout>
);

export default CardListPage;
