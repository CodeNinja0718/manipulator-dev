import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import styles from './styles';

const VOICE_LIST = [
  { title: 'voice_1', url: '/images/voice_1.webp' },
  { title: 'voice_2', url: '/images/voice_2.webp' },
  { title: 'voice_3', url: '/images/voice_3.webp' },
  { title: 'voice_4', url: '/images/voice_4.webp' },
];

const CustomerReviewTopPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={styles.wrapper}
    >
      <Box position="relative" sx={styles.customerReivewBackground}>
        <Image
          src="/images/wood_bg.webp"
          alt="wood-image"
          fill
          sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
        />
        <Typography sx={styles.customerReivewTitle} variant="title">
          お客様の声
        </Typography>
        <Box sx={styles.reviewerContainer}>
          {VOICE_LIST.map((item) => (
            <Box key={item.title} sx={styles.reviewerItem}>
              <Image
                src={item.url}
                alt={item.title}
                fill
                sizes="(max-width: 3840px) 100vw,
                      (max-width: 2048px) 75vw,
                      (max-width: 1440px) 50vw"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default CustomerReviewTopPage;
