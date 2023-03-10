import ClinicSvg from '@icons/icon_clinic.svg';
import IconReview from '@icons/icon_review.svg';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import ManipulatorCardFeature from 'components/ManipulatorList/ManipulatorCard/CardFeature';
import type { IManipulator } from 'models/manipulator/interface';
import Image from 'next/image';
import * as React from 'react';

import LineInfo from './LineInfo';
import styles from './styles';

interface SalonInfoProps {
  data: IManipulator;
}
const SalonInfo = ({ data }: SalonInfoProps) => {
  const salonInfo = data.salon?.[0];
  return (
    <Box sx={styles.salonInfo}>
      <Box margin={'40px 0 20px'}>
        <Grid container>
          <Grid item xs={'auto'}>
            <Box sx={styles.titleSalon}>
              <Typography
                style={{
                  display: 'flex',
                  fontSize: 18,
                  fontWeight: 600,
                  alignItems: 'center',
                }}
              >
                <ClinicSvg />
                整体院情報
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={true}
            justifyContent={{ xs: 'end', tablet: 'start' }}
            display="flex"
          >
            <Stack
              direction={'row'}
              alignItems="center"
              spacing={8}
              display="inline-flex"
              marginLeft={5}
              marginBottom={4}
            >
              <Typography
                component="label"
                color="orangeText"
                fontWeight="600"
                fontSize="16px"
              >
                ★ 0
              </Typography>
              <Box
                sx={{
                  svg: { width: 18, height: 18, position: 'relative', top: 2 },
                }}
                display="flex"
                alignItems="center"
              >
                <IconReview />
                <Typography
                  color="orangeText"
                  fontWeight="600"
                  component="label"
                  fontSize="10px"
                  marginLeft={2}
                >
                  レビュー
                </Typography>
              </Box>
              <Typography
                color="grayText"
                fontWeight="600"
                component="label"
                fontSize="10px"
              >
                0件
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {data.salon[0]?.photos[0]?.url && (
        <Box position={'relative'} width="100%" height={250}>
          <Image
            src={`${data.salon[0]?.photos[0]?.url || ''}`}
            alt="image-title"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
      )}
      <Stack spacing={10} divider={<Divider flexItem />} marginTop={20}>
        <LineInfo title="整体院名" text={salonInfo?.name} />
        <LineInfo
          title="住所"
          text={
            salonInfo?.addresses &&
            `${salonInfo.addresses[0]?.address}, ${salonInfo?.addresses[0]?.prefectureName}, ${salonInfo?.addresses[0]?.city}`
          }
        />
        <LineInfo
          title="最寄り駅"
          text={
            salonInfo?.addresses && salonInfo?.addresses[0]?.stations[0]?.name
          }
        />
      </Stack>
      <Divider sx={{ marginY: 15 }} />
      <Typography
        component={'label'}
        sx={styles.labelStyle}
        marginTop={10}
        display="block"
      >
        特徴
      </Typography>
      {salonInfo && salonInfo.features?.length > 0 && (
        <ManipulatorCardFeature data={data} />
      )}
      <Typography
        component={'label'}
        sx={styles.labelStyle}
        marginTop={10}
        display="block"
      >
        整体院について / 注意事項
      </Typography>
      <Box>
        <Typography component={'p'} marginTop={10} maxWidth={335} fontSize={14}>
          {data.profile}
        </Typography>
      </Box>
    </Box>
  );
};

export default SalonInfo;
