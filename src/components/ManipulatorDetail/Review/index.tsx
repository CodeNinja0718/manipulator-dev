import ClinicSvg from '@icons/icon_clinic.svg';
import UserSvg from '@icons/icon_profile.svg';
import IconReview from '@icons/icon_review.svg';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CommonTabs from 'components/CommonTabs';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import * as React from 'react';

import ManiTab from './ManiTab';
import SalonTab from './SalonTab';
import styles from './styles';

const Review = () => {
  const tabs = [
    {
      label: (
        <TabLabelItem
          label="整体師"
          icon={UserSvg}
          style={{
            width: 16,
            height: 19,
          }}
        />
      ),
      component: <ManiTab />,
    },
    {
      label: (
        <TabLabelItem
          label="整体院"
          icon={ClinicSvg}
          style={{
            width: 36,
            height: 20,
            marginTop: 5,
            color: 'inherit',
          }}
        />
      ),
      component: <SalonTab />,
    },
  ];
  return (
    <Container sx={styles.reviewContainer}>
      <Box
        sx={{
          svg: {
            width: 20,
            height: 20,
            position: 'relative',
            top: 2,
            marginRight: 6,
          },
        }}
        display="flex"
        alignItems="center"
      >
        <IconReview />
        <Typography
          color="orangeText"
          fontWeight="600"
          component="label"
          fontSize="18px"
        >
          レビュー
        </Typography>
      </Box>
      <Box marginTop={20}>
        <CommonTabs tabs={tabs} active={0} />
      </Box>
    </Container>
  );
};

export default Review;
