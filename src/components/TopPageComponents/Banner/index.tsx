import Box from '@mui/material/Box';
import Image from 'next/image';

import ContentOfBanner from './ContentOfBanner';
import LogoOfBanner from './LogoOfBanner';
import styles from './styles';

const Banner = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box position="relative">
        {/* Banner - Desktop */}
        <Box sx={styles.desktopBox}>
          <Box position="relative" sx={styles.desktopBannerElement}>
            <Image
              src="/images/banner.webp"
              alt="banner-image"
              fill
              priority
              style={{
                objectFit: 'cover',
              }}
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
    </Box>
  );
};
export default Banner;
