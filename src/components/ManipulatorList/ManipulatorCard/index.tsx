import { Box, Typography } from '@mui/material';
import type { IManipulator } from 'models/manipulator/interface';
import Image from 'next/image';
import * as React from 'react';
import Helper from 'utils/helpers';

import ManipulatorCardHeader from './CardHeader';
import ManipulatorCardLeft from './CardLeft';
import CardMenuAndFooter from './CardMenuAndFooter';
import ManipulatorCardLicences from './CardNationalLicences';
import ManipulatorCardPhoto from './CardPhoto';
import styles from './styles';

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
          {salonInfo && salonInfo.photos?.length > 0 && (
            <ManipulatorCardPhoto data={data} />
          )}
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
          <Box
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
          </Box>
          {salonInfo && salonInfo.features?.length > 0 && (
            <Box display="flex" flexWrap="wrap" gap="5px" margin="20px 0px">
              {salonInfo.features.map((item, index) => (
                <Image
                  key={`feat-${index}`}
                  src={Helper.getFeatueImage(item.id)}
                  alt="feat-image"
                  height={55}
                  priority
                  width={80}
                />
              ))}
            </Box>
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
