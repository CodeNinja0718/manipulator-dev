import { Container } from '@mui/material';
import { dehydrate } from '@tanstack/react-query';
import ManipulatorDetail from 'components/ManipulatorDetail';
import { useFetch } from 'hooks';
import type { IManipulator } from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import React from 'react';
import queryClient, { fetchData } from 'utils/queryClient';

import styles from './styles';

const Layout = dynamic(() => import('components/Layout'));
const BackButton = dynamic(
  () => import('components/ManipulatorDetail/BackButton'),
);

const ManipulatorDetailElement = () => {
  const router = useRouter();
  const slug = router.query?.slug as string;
  const { data } = useFetch<IManipulator>({
    ...manipulatorQuery.detailManiplator(slug),
    staleTime: 1000 * 60,
  });

  return (
    <>
      <Head>
        <title>{data?.name}</title>
        <meta name="description" content={data?.name} />
      </Head>
      <ManipulatorDetail data={data} />
    </>
  );
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug } = query;
    const manipulatorId = (slug as string) || '';
    await fetchData({
      ...manipulatorQuery.detailManiplator(manipulatorId),
      staleTime: 1000 * 60,
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default ManipulatorDetailElement;
