import FeatureSuitableIcon from '@icons/feature_suitable.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import CardItem from './CardItem';
import styles from './styles';

const FEATURE_ITEMS = [
  {
    parentTitle: '簡単に',
    titleIcon: FeatureSuitableIcon,
    description: 'が見つかる！',
    svgProps: {
      viewBox: '0 0 250 29',
    },
    svgStyle: {
      width: '226px',
    },
  },
  {
    titleIcon: FeatureSuitableIcon,
    description: 'が登録！だから安心！',
    svgProps: {
      viewBox: '0 0 250 29',
    },
    svgStyle: {
      width: '226px',
    },
  },
  {
    titleIcon: FeatureSuitableIcon,
    description: '分かりやすい！',
    svgProps: {
      viewBox: '0 0 250 29',
    },
    svgStyle: {
      width: '226px',
    },
  },
];

const FeatureTopPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
      }}
    >
      <Box
        position="relative"
        width="100%"
        height={{ xs: '100%', tablet: 656 }}
        overflow="hidden"
        sx={{
          display: 'flex',
          pt: { xs: 64, tablet: 258 },
          pb: 64,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Image
          style={{
            top: '-6px',
          }}
          src="/images/feature-background.png"
          alt="feature-background-image"
          fill
          sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
        />
        <Box
          sx={{ position: 'relative', display: 'block', textAlign: 'center' }}
        >
          <Typography
            sx={{
              fontSize: 37.55,
              color: 'white',
              fontWeight: 500,
            }}
            variant="titleWhite"
          >
            「整体なび」の特徴
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            mt: 53,
            flexWrap: 'wrap',
            gap: 50,
            justifyContent: 'center',
          }}
        >
          {FEATURE_ITEMS.map((item, index) => (
            <CardItem
              key={index}
              parentTitle={item.parentTitle}
              titleIcon={item.titleIcon}
              description={item.description}
              svgProps={item.svgProps}
              svgStyle={item.svgStyle}
              customStyle={{
                ...styles.cardItemStyle,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureTopPage;
