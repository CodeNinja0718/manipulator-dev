import { Box, Stack, Typography } from '@mui/material';
import Layout from 'components/Layout';
import { AddTicketForm } from 'components/Ticket';
import React from 'react';

import styles from './styles';

const AddTicketScreen = () => {
  return (
    <Stack sx={styles.addTicketContainer}>
      <Box display={'flex'} alignItems={'center'} alignSelf={'center'}>
        <Typography variant="title" fontSize={24} mb={{ xs: 32, tablet: 40 }}>
          登録完了
        </Typography>
      </Box>
      <AddTicketForm />
    </Stack>
  );
};

AddTicketScreen.getLayout = (page: React.ReactNode) => {
  return <Layout isCardLayout>{page}</Layout>;
};

export default AddTicketScreen;
