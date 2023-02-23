import ArrowIcon from '@icons/arrow.svg';
import RegisterSvg from '@icons/icon_profile.svg';
import {
  Box,
  Button,
  Divider,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import BackButton from 'components/ManipulatorDetail/BackButton';
import CardMenu from 'components/ManipulatorDetail/CardMenu';
import Review from 'components/ManipulatorDetail/Review';
import SalonInfo from 'components/ManipulatorDetail/SalonInfo';
import ManipulatorCardLicences from 'components/ManipulatorList/ManipulatorCard/CardNationalLicences';
import ManipulatorCardPhoto from 'components/ManipulatorList/ManipulatorCard/CardPhoto';
import theme from 'theme';
import Helper from 'utils/helpers';

import type { MenuHeadItem } from './HeadMenu';
import HeadMenu from './HeadMenu';
import { data } from './mock';
import styles from './styles';

const ManipulatorDetail = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('normalTablet'));
  const menus: MenuHeadItem[] = [
    { title: 'プロフィール ', link: 'id_1' },
    { title: 'メニュー', link: 'id_2' },
    { title: ' 整体院情報', link: 'id_3' },
    { title: 'レビュー', link: 'id_4' },
  ];
  const salonInfo = data.salon?.[0];

  return (
    <Box sx={styles.rightContainer}>
      <Box
        display={{ xs: 'none', tablet: 'block' }}
        height={6}
        width="100%"
        bgcolor={'orange.main'}
        marginBottom={20}
      ></Box>
      <HeadMenu menus={menus} />
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
        <Typography component={'p'}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Typography>
        {data.careerStart && (
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
        {data.nationalLicenses?.length > 0 && (
          <ManipulatorCardLicences data={data} />
        )}
        {salonInfo && salonInfo.photos?.length > 0 && (
          <Box margin="20px 0px">
            <ManipulatorCardPhoto
              data={data}
              width={isMobile ? 160 : 200}
              height={isMobile ? 110 : 136}
            />
          </Box>
        )}
      </Box>
      <Box id="id_2">
        <CardMenu data={data} />
        {isMobile && (
          <Box textAlign="center" marginTop="20px">
            <Button
              onClick={() => {}}
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
              今すぐ予約
            </Button>
          </Box>
        )}
      </Box>
      <Box id="id_3">
        <SalonInfo data={data} />
      </Box>
      <Box id="id_4">
        <Review />
      </Box>
      <Box display={'flex'} justifyContent={'center'} marginTop={30}>
        <BackButton />
      </Box>
    </Box>
  );
};
export default ManipulatorDetail;
