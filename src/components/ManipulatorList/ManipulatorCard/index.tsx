import ArrowIcon from '@icons/arrow.svg';
import { Box, Button, SvgIcon, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

import ManipulatorCardHeader from './CardHeader';
import ManipulatorCardLeft from './CardLeft';
import ManipulatorCardLicences from './CardNationalLicences';
import ManipulatorCardPhoto from './CardPhoto';
import ManipulatorCardTreatmentMenu from './CardTreatmentMenu';
import type { ManipulatorCardModel } from './model';
import styles from './styles';

interface ManipulatorCardProps {
  data: ManipulatorCardModel;
}

const ManipulatorCard = ({ data }: ManipulatorCardProps) => {
  return (
    <Box sx={styles.manipulatorCard}>
      <ManipulatorCardHeader data={data} />
      <Box sx={styles.manipulatorCardContent}>
        <ManipulatorCardLeft data={data} />
        <Box sx={styles.colRight}>
          <Typography component="h3" fontWeight={'600'}>
            {data.salons[0]?.name}
          </Typography>
          <Typography component="p" fontSize="12px" color="graySolid">
            {data.distance}
          </Typography>
          {data.photo.length > 0 && <ManipulatorCardPhoto data={data} />}
          {data.yearsOfExperience && (
            <Box display="flex" marginTop="5px" alignItems="center">
              <Box flex="0 0 75px">
                <Typography component="label" sx={styles.labelStyle}>
                  経験年数
                </Typography>
              </Box>
              <Box flex="1 1 auto">
                <Typography component="p" fontSize="14px">
                  {data.yearsOfExperience}
                </Typography>
              </Box>
            </Box>
          )}
          {data.nationalLicenses.length > 0 && (
            <ManipulatorCardLicences data={data} />
          )}
          <Box display="flex" marginTop="15px">
            <Box flex="0 0 75px">
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
          {data.fetures.length > 0 && (
            <Box display="flex" flexWrap="wrap" gap="5px" margin="20px 0px">
              {data.fetures.map((item, index) => (
                <Image
                  key={`feat-${index}`}
                  src={`/${item.url}`}
                  alt="feat-image"
                  height={55}
                  priority
                  width={80}
                />
              ))}
            </Box>
          )}
          <ManipulatorCardTreatmentMenu data={data} />
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={styles.button}
              endIcon={
                <SvgIcon
                  component={ArrowIcon}
                  viewBox="0 0 14 30"
                  color="inherit"
                />
              }
            >
              詳細を見る
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ManipulatorCard;
