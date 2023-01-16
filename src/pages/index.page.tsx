import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { ReactElement } from 'react';

const Banner = dynamic(() => import('../components/TopPageComponents/Banner'));
const DefaultSearchTopPage = dynamic(
  () => import('../components/TopPageComponents/DefaultSearchTopPage'),
);
const AdvanceSearchTopPage = dynamic(
  () => import('../components/TopPageComponents/AdvanceSearchTopPage'),
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

      <AdvanceSearchTopPage />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          background: 'white',
          pt: 60,
          pb: 68,
        }}
      >
        <Box position="relative" width={446} height={337}>
          <Image
            src="/images/problem.webp"
            alt="problem-image"
            fill
            priority
            sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
          />
        </Box>
      </Box>
    </Box>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
