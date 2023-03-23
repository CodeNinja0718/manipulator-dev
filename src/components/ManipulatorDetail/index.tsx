import ArrowRight from '@icons/arrow-right.svg';
import RegisterSvg from '@icons/icon_profile.svg';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import ManipulatorSummaryInfo from 'components/Manipulator/SummaryInfo';
import BackButton from 'components/ManipulatorDetail/BackButton';
import Review from 'components/ManipulatorDetail/Review';
import SalonInfo from 'components/ManipulatorDetail/SalonInfo';
import ManipulatorCardLicences from 'components/ManipulatorList/ManipulatorCard/CardNationalLicences';
import type { IManipulator } from 'models/manipulator/interface';
import Link from 'next/link';
import { MENU_MANIPULATOR_DETAIL } from 'utils/const';
import Helper from 'utils/helpers';

import CardMenu from './CardMenu';
import HeadMenu from './HeadMenu';
import styles from './styles';

interface ManipulatorDetailProps {
  data?: IManipulator;
}
const ManipulatorDetail = ({ data }: ManipulatorDetailProps) => {
  // const salonInfo = data?.salon?.[0];

  return (
    <Stack
      direction="row"
      gap={{ xs: 24, tablet: 40 }}
      mt={{ xs: 20, tablet: 30 }}
      flexWrap={{ xs: 'wrap', tablet: 'nowrap' }}
    >
      <Box
        flex={{ xs: '1 1 auto', tablet: '0 0 260px' }}
        px={{ xs: 24, tablet: 0 }}
      >
        <ManipulatorSummaryInfo data={data} />
        <Button
          variant="contained"
          sx={{ mt: 20 }}
          fullWidth
          component={Link}
          href={`/booking/${data?._id}`}
          endIcon={<ArrowRight />}
        >
          今すぐ予約
        </Button>
      </Box>
      <Box flex={{ xs: '1 1 auto' }}>
        <Box
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
        <Box id="id_1" padding={{ xs: '10px 20px', tablet: 0 }}>
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
          {data?.profile && (
            <Typography component={'p'}>{data?.profile}</Typography>
          )}
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
          {/* {salonInfo && salonInfo.photos?.length > 0 && (
            <Box margin="20px 0px">
              <ManipulatorCardPhoto
                data={data}
                width={200}
                height={136}
                isInDetail={true}
              />
            </Box>
          )} */}
        </Box>
        <Box id="id_2">{data && <CardMenu data={data} />}</Box>
        <Box id="id_3" padding={{ xs: '0px 20px', tablet: 0 }}>
          {data && <SalonInfo data={data} />}
        </Box>
        <Box id="id_4">
          <Review />
        </Box>
        <Box
          textAlign="center"
          marginTop="20px"
          display={{ xs: 'block', tablet: 'none' }}
          padding={{ xs: '10px 20px', tablet: 0 }}
        >
          <Button
            href={`/booking/${data?._id}`}
            variant="contained"
            sx={{
              ...styles.button,
              ...{ display: { xs: 'flex', tablet: 'none' } },
            }}
            endIcon={<ArrowRight />}
          >
            今すぐ予約
          </Button>
        </Box>
        <Box display={'flex'} justifyContent={'center'} marginY={30}>
          <BackButton />
        </Box>
      </Box>
    </Stack>
  );
};
export default ManipulatorDetail;
