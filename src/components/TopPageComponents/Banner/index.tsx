import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import styles from './styles';

const LogoOfBanner = dynamic(() => import('./LogoOfBanner'));
const ContentOfBanner = dynamic(() => import('./ContentOfBanner'));

const Banner = () => {
  return (
    <Box
      position="relative"
      sx={{
        height: { xs: 320, normalMobile: 362, tablet: 448 },
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', tablet: 'block' },
        }}
      >
        <Box position="relative" height={448}>
          <Image
            src="/images/banner.webp"
            alt="banner-image"
            fill
            priority
            sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'block', tablet: 'none' },
        }}
      >
        <Box>
          <Image
            src="/images/banner_mobile.webp"
            alt="banner-image"
            fill
            priority
          />
        </Box>
      </Box>

      {/*  */}

      <Box sx={styles.boxBannerPosition}>
        <Box sx={styles.boxBanner}>
          <LogoOfBanner />
          <ContentOfBanner />
        </Box>
      </Box>
    </Box>
  );
};
export default Banner;
