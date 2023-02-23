import { Box, Container, Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';
import React from 'react';

import styles from './styles';

const LeftInfo = dynamic(() => import('components/ManipulatorDetail/LeftInfo'));
const Layout = dynamic(() => import('components/Layout'));
const ManipulatorDetail = dynamic(() => import('components/ManipulatorDetail'));
const BackButton = dynamic(
  () => import('components/ManipulatorDetail/BackButton'),
);

const ManipulatorDetailElement = () => {
  return <ManipulatorDetail />;
};

ManipulatorDetailElement.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout isCardLayout>
      <Container sx={styles.mainContainer}>
        <BackButton />
        <Grid container direction="row">
          <Grid
            item
            xs="auto"
            sx={{ display: { xs: 'none', tablet: 'block' } }}
          >
            <LeftInfo />
          </Grid>
          <Grid item xs>
            <Box overflow="hidden" width="100%">
              {page}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ManipulatorDetailElement;
