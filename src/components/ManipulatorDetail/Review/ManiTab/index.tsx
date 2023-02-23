import ArrowIcon from '@icons/arrow.svg';
import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

import ReviewItem from '../ReviewItem';
import Stars from '../Stars';
import styles from '../styles';

const ManiTab = () => {
  return (
    <Box>
      <Stack spacing={15} direction="row" alignItems={'center'}>
        <Stars star={4.5} />{' '}
        <Typography
          color="grayText"
          fontWeight="600"
          component="label"
          fontSize="12px"
          paddingTop={2}
        >
          999件
        </Typography>
      </Stack>
      <Box marginTop={25} paddingRight={20}>
        <ReviewItem />
        <ReviewItem />
      </Box>
      <Box textAlign="center" margin="20px 0px">
        <Button
          onClick={() => {}}
          variant="outlined"
          sx={styles.button}
          endIcon={
            <SvgIcon
              component={ArrowIcon}
              viewBox="0 0 14 30"
              color="inherit"
            />
          }
        >
          レビューをさらに表示
        </Button>
      </Box>
    </Box>
  );
};

export default ManiTab;
