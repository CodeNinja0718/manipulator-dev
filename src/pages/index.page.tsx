import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

const Banner = dynamic(() => import('../components/TopPageComponents/Banner'));
const SearchTopPage = dynamic(
  () => import('../components/TopPageComponents/SearchTopPage'),
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
const FAQTopPage = dynamic(
  () => import('../components/TopPageComponents/FAQTopPage'),
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
      </Box>
      {/* Searching */}
      <SearchTopPage />
      {/* Problems */}
      <ProblemsTopPage />
      {/* Features */}
      <FeatureTopPage />
      {/* Flow */}
      <FlowTopPage />
      {/* Customer Review */}
      <CustomerReviewTopPage />
      {/* FAQ */}
      <FAQTopPage />
    </Box>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
