import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

const Banner = dynamic(() => import('../components/Banner'));
const SearchTopPage = dynamic(() => import('../components/SearchTopPage'));

const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          background: (theme: Theme) => theme.palette.orangeGradient,
        }}
      >
        <Banner />

        {/* Search */}
        <SearchTopPage />
      </Box>
    </Box>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
