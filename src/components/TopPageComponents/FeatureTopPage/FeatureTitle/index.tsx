import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadiusCard from 'components/RadiusCard';
import Image from 'next/image';

import styles from './styles';

const FeatureTitle = () => {
  return (
    <RadiusCard customStyle={{ ...styles.topTitle }}>
      <Box position="relative" height={117}>
        <Image
          src="/images/resolve.webp"
          alt="resolve title"
          fill
          sizes="(max-width: 3840px) 100vw,
                    (max-width: 2048px) 75vw,
                    (max-width: 1440px) 50vw"
        />
      </Box>
      <Box mt={19}>
        <Typography
          maxWidth={420}
          lineHeight={0.84}
          sx={{
            textAlign: 'center',
          }}
        >
          {`体が痛い時、不安な時、あなたに合った整体師、\n
          自宅や職場から近い整体師（院）がすぐに見つかります！`}
        </Typography>
      </Box>
      <Box sx={styles.arrow}></Box>
    </RadiusCard>
  );
};

export default FeatureTitle;
