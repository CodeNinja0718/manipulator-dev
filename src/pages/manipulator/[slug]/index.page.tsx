import { Container } from '@mui/material';
import { useFetch } from 'hooks';
import type { IManipulator } from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import React from 'react';

import styles from './styles';

const Layout = dynamic(() => import('components/Layout'));
const ManipulatorDetail = dynamic(() => import('components/ManipulatorDetail'));
const BackButton = dynamic(
  () => import('components/ManipulatorDetail/BackButton'),
);

const ManipulatorDetailElement = () => {
  const router = useRouter();
  const slug = router.query?.slug as string;
  const { data } = useFetch<IManipulator>(
    manipulatorQuery.detailManiplator(slug),
  );

  return <ManipulatorDetail data={data} />;
};

ManipulatorDetailElement.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout isCardLayout>
      <Container sx={styles.mainContainer}>
        <BackButton />
        {page}
      </Container>
    </Layout>
  );
};

export default ManipulatorDetailElement;
