import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack, Typography } from '@mui/material';
import Layout from 'components/Layout';
import { AddTicketForm } from 'components/Ticket';
import { useFetch, useList, useMutate, useUser } from 'hooks';
import _pick from 'lodash/pick';
import type { ICardItem } from 'models/card/interface';
import cardQuery from 'models/card/query';
import type { IManipulator } from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import type { IAvailableTicket } from 'models/ticket/interface';
import ticketQuery from 'models/ticket/query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './styles';

const schema = yup.object().shape({
  ticketId: yup.string().required(),
});

const AddTicketScreen = () => {
  const router = useRouter();

  const { control, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const { slug } = router.query;

  useEffect(() => {
    if (router.isReady && !slug) {
      router.back();
    }
  }, [slug, router]);

  const manipulatorId = slug?.[0] || '';

  const currentTicketId = slug?.[1] || '';

  const { data: manipulatorData, isLoading: isManiLoading } =
    useFetch<IManipulator>({
      ...manipulatorQuery.detailManiplator(manipulatorId),
      staleTime: 5 * 1000 * 60,
    });

  const { list: availableTicketsList, isLoading: isTicketLoading } =
    useList<IAvailableTicket>({
      ...ticketQuery.getManipulatorTickets(manipulatorId),
    });

  const { data: currentUser } = useUser();

  const { data: cardList, isLoading: isLoadingCard } = useFetch<{
    items: ICardItem[];
  }>({
    ...cardQuery.cardList,
    enabled: !!currentUser,
  });

  const { mutateAsync: buyTicketRequest, isLoading: isSubmitLoading } =
    useMutate(ticketQuery.buyTicket);

  useEffect(() => {
    if (
      availableTicketsList &&
      availableTicketsList.findIndex((t) => t.ticketId === currentTicketId) !==
        -1
    ) {
      setValue('ticketId', currentTicketId);
    }
  }, [currentTicketId, availableTicketsList, setValue]);

  const [isSubmit, setSubmision] = useState(false);

  const handleSubmit = (payment: string) => {
    const selectedTicketId = getValues('ticketId') as string;

    if (!payment || !selectedTicketId) return;

    setSubmision(true);
    buyTicketRequest(
      { ticketId: selectedTicketId, paymentMethod: payment },
      {
        onSuccess: () => {
          const { href } = router.query;

          router.push({
            pathname: typeof href === 'string' ? href : href?.[0],
            query: {
              slug: [manipulatorId],
            },
          });
        },
        onError: () => {
          setSubmision(false);
        },
      },
    );
  };

  return (
    <Stack sx={styles.addTicketContainer}>
      <Box display={'flex'} alignItems={'center'} alignSelf={'center'}>
        <Typography variant="title" fontSize={24} mb={{ xs: 32, tablet: 40 }}>
          登録完了
        </Typography>
      </Box>
      <AddTicketForm
        control={control}
        ticketsList={availableTicketsList || []}
        cardList={cardList?.items || []}
        isCardListLoading={isLoadingCard}
        manipulator={{ ..._pick(manipulatorData, ['name', 'nameKana']) }}
        isLoading={isManiLoading || isTicketLoading}
        onSubmit={handleSubmit}
        isSubmitLoading={isSubmitLoading || isSubmit}
      />
    </Stack>
  );
};

AddTicketScreen.getLayout = (page: React.ReactNode) => {
  return <Layout isCardLayout>{page}</Layout>;
};

export default AddTicketScreen;
