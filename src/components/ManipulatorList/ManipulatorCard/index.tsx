import { Box, Typography } from '@mui/material';
import type { IManipulator } from 'models/manipulator/interface';
import dynamic from 'next/dynamic';
import * as React from 'react';
import Helper from 'utils/helpers';

import ManipulatorCardFeature from './CardFeature';
import ManipulatorCardHeader from './CardHeader';
import ManipulatorCardLeft from './CardLeft';
import ManipulatorCardLicences from './CardNationalLicences';
// import ManipulatorCardPhoto from './CardPhoto';
import styles from './styles';

const CardMenuAndFooter = dynamic(() => import('./CardMenuAndFooter'));

interface ManipulatorCardProps {
  data: IManipulator;
}

const ManipulatorCard = ({ data }: ManipulatorCardProps) => {
  const salonInfo = data.salon?.[0];
  return (
    <Box sx={styles.manipulatorCard}>
      <ManipulatorCardHeader data={data} />
      <Box sx={styles.manipulatorCardContent}>
        <ManipulatorCardLeft data={data} />
        <Box sx={styles.colRight}>
          <Typography component="h3" fontWeight={'600'}>
            {salonInfo?.name}
          </Typography>
          <Typography component="p" fontSize="12px" color="graySolid">
            {salonInfo?.access?.length && salonInfo?.access[0]}
          </Typography>
          {/* {salonInfo && salonInfo.photos?.length > 0 && (
            <ManipulatorCardPhoto data={data} width={120} height={80} />
          )} */}
          {data.careerStart && (
            <Box display="flex" marginTop="5px" alignItems="center">
              <Box flex="0 0 75px">
                <Typography component="label" sx={styles.labelStyle}>
                  経験年数
                </Typography>
              </Box>
              <Box flex="1 1 auto">
                <Typography component="p" fontSize="14px">
                  {Helper.getExpYear(data.careerStart)}年
                </Typography>
              </Box>
            </Box>
          )}
          {data.nationalLicenses?.length > 0 && (
            <ManipulatorCardLicences data={data} />
          )}
          {/* <Box
            display="flex"
            marginTop="15px"
            sx={{ flexDirection: { xs: 'column', tablet: 'row' } }}
          >
            <Box flex={{ xs: '1 1 auto', tablet: '0 0 75px' }}>
              <Typography component="label" sx={styles.labelStyle}>
                PR
              </Typography>
            </Box>
            <Box flex="1 1 auto">
              <Typography component="p" fontSize="14px">
                {data.pr}
              </Typography>
            </Box>
          </Box> */}
          {salonInfo && salonInfo.features?.length > 0 && (
            <ManipulatorCardFeature data={data} />
          )}
          <Box display={{ xs: 'none', tablet: 'block' }}>
            <CardMenuAndFooter data={data} />
          </Box>
        </Box>
        <Box
          display={{ xs: 'block', tablet: 'none' }}
          flex="0 0 100%"
          max-width="100%"
        >
          <CardMenuAndFooter data={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default ManipulatorCard;
