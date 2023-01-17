import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import styles from './styles';

const FlowTopPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={styles.wrapper}
    >
      <Box>
        <Typography sx={styles.flowTitle} variant="title">
          利用方法
        </Typography>
        {/* Desktop Image */}
        <Box position="relative" sx={styles.flowDesktopImage}>
          <Image
            src="/images/flow.webp"
            alt="flow-image"
            fill
            sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
          />
        </Box>
        {/* Mobile Image */}
        <Box sx={styles.flowMobileImage}>
          <Image
            src="/images/flow_mobile.webp"
            alt="flow-image"
            fill
            sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default FlowTopPage;
