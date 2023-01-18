import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadiusCard from 'components/RadiusCard';
import Image from 'next/image';

import styles from './styles';

const FeatureTitle = () => {
  return (
    <RadiusCard customStyle={{ ...styles.topTitle }}>
      <Box
        position="relative"
        sx={{
          width: { xs: '308px', tablet: '448px' },
          height: { xs: '82px', tablet: '117px' },
          margin: '0 auto',
        }}
      >
        <Image
          src="/images/resolve.webp"
          alt="resolve title"
          fill
          sizes="(max-width: 3840px) 100vw,
                    (max-width: 2048px) 75vw,
                    (max-width: 1440px) 50vw,
                    (max-width: 768) 308px"
        />
      </Box>
      <Box mt={19}>
        <Typography
          sx={{
            textAlign: 'center',
            maxWidth: { xs: 230, sm: 420 },
            margin: '0 auto',
          }}
        >
          {`体が痛い時、不安な時、あなたに合った整体師、
          自宅や職場から近い整体師（院）がすぐに見つかります！`}
        </Typography>
      </Box>
      <Box sx={styles.arrow}></Box>
    </RadiusCard>
  );
};

export default FeatureTitle;
