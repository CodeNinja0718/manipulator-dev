import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';

import Stars from '../Stars';

const ManiTab = () => {
  return (
    <Box>
      <Stack spacing={15} direction="row" alignItems={'center'}>
        <Stars star={0} />{' '}
        <Typography
          color="grayText"
          fontWeight="600"
          component="label"
          fontSize="12px"
          paddingTop={2}
        >
          0件
        </Typography>
      </Stack>
      <Box marginTop={25} paddingRight={20}>
        {/* <ReviewItem />
        <ReviewItem /> */}
        <Typography
          fontSize={24}
          variant="subtitle1"
          textAlign="center"
          color="gray"
          mb={30}
        >
          空のリスト
        </Typography>
      </Box>
      {/* <Box textAlign="center" margin="20px 0px">
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
      </Box> */}
    </Box>
  );
};

export default ManiTab;
