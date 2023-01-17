import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

const Banner = dynamic(() => import('../components/TopPageComponents/Banner'));
const DefaultSearchTopPage = dynamic(
  () => import('../components/TopPageComponents/DefaultSearchTopPage'),
);
const AdvanceSearchTopPage = dynamic(
  () => import('../components/TopPageComponents/AdvanceSearchTopPage'),
);
const ProblemsTopPage = dynamic(
  () => import('../components/TopPageComponents/ProblemsTopPage'),
);
const FeatureTopPage = dynamic(
  () => import('../components/TopPageComponents/FeatureTopPage'),
);
const FlowTopPage = dynamic(
  () => import('../components/TopPageComponents/FlowTopPage'),
);
const CustomerReviewTopPage = dynamic(
  () => import('../components/TopPageComponents/CustomerReviewTopPage'),
);

const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          background: (theme: Theme) => theme.palette.orangeGradient,
          paddingTop: { xs: '10px', tablet: 0 },
        }}
      >
        <Banner />

        {/* Default Search */}
        <DefaultSearchTopPage />
      </Box>
      {/* Advance Search - Filter */}
      <AdvanceSearchTopPage />
      {/* Problems */}
      <ProblemsTopPage />
      {/* Features */}
      <FeatureTopPage />
      {/* Flow */}
      <FlowTopPage />
      {/* Customer Review */}
      <CustomerReviewTopPage />
    </Box>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
