import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import styles from './styles';

const LogoOfBanner = dynamic(() => import('./LogoOfBanner'));
const ContentOfBanner = dynamic(() => import('./ContentOfBanner'));

const Banner = () => {
  return (
    <Box position="relative">
      {/* Banner - Desktop */}
      <Box sx={styles.desktopBox}>
        <Box position="relative" sx={styles.desktopBannerElement}>
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

      {/* Banner - Tablet, Mobile */}
      <Box sx={styles.mobileBox}>
        <Box position="relative" sx={styles.mobileBannerElement}>
          <Image
            src="/images/banner_mobile.webp"
            alt="banner-image"
            fill
            priority
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>

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
