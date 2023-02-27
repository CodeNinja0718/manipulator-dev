import ArrowIcon from '@icons/arrow.svg';
import RegisterSvg from '@icons/icon_profile.svg';
import { Box, Button, Divider, Grid, SvgIcon, Typography } from '@mui/material';
import BackButton from 'components/ManipulatorDetail/BackButton';
import Review from 'components/ManipulatorDetail/Review';
import SalonInfo from 'components/ManipulatorDetail/SalonInfo';
import ManipulatorCardLicences from 'components/ManipulatorList/ManipulatorCard/CardNationalLicences';
import ManipulatorCardPhoto from 'components/ManipulatorList/ManipulatorCard/CardPhoto';
import type { IManipulator } from 'models/manipulator/interface';
import dynamic from 'next/dynamic';
import { MENU_MANIPULATOR_DETAIL } from 'utils/const';
import Helper from 'utils/helpers';

import CardMenu from './CardMenu';
import HeadMenu from './HeadMenu';
import styles from './styles';

const LeftManipulatorProfile = dynamic(
  () => import('components/LeftManipulatorProfile'),
);

interface ManipulatorDetailProps {
  data?: IManipulator;
}
const ManipulatorDetail = ({ data }: ManipulatorDetailProps) => {
  const salonInfo = data?.salon?.[0];

  return (
    <Grid container direction="row">
      <Grid item xs="auto" sx={{ display: { xs: 'none', tablet: 'block' } }}>
        <LeftManipulatorProfile data={data} />
      </Grid>
      <Grid item xs>
        <Box overflow="hidden" width="100%">
          <Box sx={styles.rightContainer}>
            <Box
              display={{ xs: 'none', tablet: 'block' }}
              height={6}
              width="100%"
              bgcolor={'orange.main'}
              marginBottom={20}
            ></Box>
            <HeadMenu menus={MENU_MANIPULATOR_DETAIL} />
            <Divider
              sx={{
                borderColor: '#ccc',
                marginTop: '20px',
              }}
            />
            <Box id="id_1">
              <Box sx={styles.title}>
                <Typography
                  style={{
                    display: 'flex',
                    fontSize: 18,
                    fontWeight: 600,
                    alignItems: 'center',
                  }}
                >
                  <RegisterSvg />
                  プロフィール
                </Typography>
              </Box>
              <Typography component={'p'}>{data?.profile}</Typography>
              {data?.careerStart && (
                <Box display="flex" margin="8px 0px" alignItems="center">
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
              {data && data.nationalLicenses?.length > 0 && (
                <ManipulatorCardLicences data={data} />
              )}
              {salonInfo && salonInfo.photos?.length > 0 && (
                <Box margin="20px 0px">
                  <ManipulatorCardPhoto
                    data={data}
                    width={200}
                    height={136}
                    isInDetail={true}
                  />
                </Box>
              )}
            </Box>
            <Box id="id_2">
              {data && <CardMenu data={data} />}
              <Box
                textAlign="center"
                marginTop="20px"
                display={{ xs: 'block', talet: 'none' }}
              >
                <Button
                  onClick={() => {}}
                  variant="contained"
                  sx={{
                    ...styles.button,
                    ...{ display: { xs: 'flex', tablet: 'none' } },
                  }}
                  endIcon={
                    <SvgIcon
                      component={ArrowIcon}
                      viewBox="0 0 14 30"
                      color="inherit"
                    />
                  }
                >
                  今すぐ予約
                </Button>
              </Box>
            </Box>
            <Box id="id_3">{data && <SalonInfo data={data} />}</Box>
            <Box id="id_4">
              <Review />
            </Box>
            <Box display={'flex'} justifyContent={'center'} marginTop={30}>
              <BackButton />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ManipulatorDetail;
