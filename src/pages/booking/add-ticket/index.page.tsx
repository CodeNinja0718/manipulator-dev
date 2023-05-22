import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack, Typography } from '@mui/material';
import Layout from 'components/Layout';
import { AddTicketForm } from 'components/Ticket';
import { useFetch, useList, useMutate } from 'hooks';
import _pick from 'lodash/pick';
import type { IManipulator } from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import type { IAvailableTicket } from 'models/ticket/interface';
import ticketQuery from 'models/ticket/query';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
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

  const { mutateAsync: buyTicketRequest } = useMutate(ticketQuery.buyTicket);

  useEffect(() => {
    if (
      availableTicketsList &&
      availableTicketsList.findIndex((t) => t.ticketId === currentTicketId) !==
        -1
    ) {
      setValue('ticketId', currentTicketId);
    }
  }, [currentTicketId, availableTicketsList, setValue]);

  const handleSubmit = (payment: string) => {
    const selectedTicketId = getValues('ticketId') as string;

    if (!payment || !selectedTicketId) return;

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
        ticketsList={availableTicketsList}
        manipulator={{ ..._pick(manipulatorData, ['name', 'nameKana']) }}
        isLoading={isManiLoading || isTicketLoading}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
};

AddTicketScreen.getLayout = (page: React.ReactNode) => {
  return <Layout isCardLayout>{page}</Layout>;
};

export default AddTicketScreen;
