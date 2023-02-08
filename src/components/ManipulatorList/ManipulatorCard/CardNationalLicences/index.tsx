import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { NATIONAL_LICENSES } from 'utils/const';

import type { ManipulatorCardModel } from '../model';
import styles from './styles';

interface ManipulatorCardLicencesProps {
  data: ManipulatorCardModel;
}
const ManipulatorCardLicences = ({ data }: ManipulatorCardLicencesProps) => {
  return (
    <Box display="flex" marginTop="5px">
      <Box flex="0 0 75px">
        <Typography
          color="orangeText"
          fontWeight="bold"
          component="label"
          fontSize="14px"
        >
          国家資格
        </Typography>
      </Box>
      <Box sx={styles.licencesWrap}>
        {NATIONAL_LICENSES.map((item, index) => (
          <Button
            sx={styles.labelItem}
            color={data.nationalLicenses.includes(item) ? 'orange' : 'inherit'}
            variant={
              data.nationalLicenses.includes(item) ? 'contained' : 'outlined'
            }
            key={index}
            size="small"
          >
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ManipulatorCardLicences;
