import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadiusCard from 'components/RadiusCard';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import styles from './styles';

const FeatureTitle = dynamic(() => import('./FeatureTitle'));

const FEATURE_ITEMS = [
  {
    parentTitle: '簡単に',
    title: '自分に合った整体師',
    description: 'が見つかる！',
    imageUrl: '/images/feature_suitable.png',
    imageStyle: {
      width: '148px',
      height: '125px',
      transform: 'translateY(-11px)',
    },
  },
  {
    title: '経験豊富な整体師',
    description: 'が登録！だから安心！',
    imageUrl: '/images/feature_experinced.png',
    imageStyle: {
      width: '115px',
      height: '110px',
      transform: 'translateY(-26px)',
    },
  },
  {
    title: '料金がいくらか',
    description: '分かりやすい！',
    imageUrl: '/images/feature_fee.png',
    imageStyle: {
      width: '112px',
      height: '110px',
      transform: 'translateY(-21px)',
    },
  },
];

const FeatureTopPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <FeatureTitle />
      <Box sx={styles.featureContainer}>
        <Image
          style={{
            top: '-6px',
          }}
          src="/images/feature-background.png"
          alt="feature-background-image"
          fill
          priority
          sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
        />
        <Box
          sx={{ position: 'relative', display: 'block', textAlign: 'center' }}
        >
          <Typography sx={styles.featureListTitle} variant="titleWhite">
            「整体なび」の特徴
          </Typography>
        </Box>
        <Box sx={styles.featureListBox}>
          {FEATURE_ITEMS.map((item, index) => (
            <RadiusCard
              key={index}
              parentTitle={item.parentTitle}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              customStyle={{
                ...styles.featureItemStyle,
              }}
              imageStyle={{ ...item.imageStyle }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureTopPage;
