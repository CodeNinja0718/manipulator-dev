import ArrowIcon from '@icons/arrow.svg';
import AutonomicNervesIcon from '@icons/autonomic_nerves.svg';
import HipJoinKneeFootIcon from '@icons/hip_join_knee_foot.svg';
import NeckShoulderIcon from '@icons/neck_shoulder.svg';
import OtherSymptomsIcon from '@icons/other_symptoms.svg';
import SearchIcon from '@icons/search.svg';
import SportsInjurIcon from '@icons/sports_injur.svg';
import WaistIcon from '@icons/waist.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import CirleBox from 'components/CirleBox';
import Image from 'next/image';

import styles from './styles';

const FILTER_ITEMS = [
  {
    icon: AutonomicNervesIcon,
    label: `自律神経`,
    viewBox: '0 0 54.307 56.718',
    url: '/icons/autonomic_nerves.svg',
  },
  {
    icon: NeckShoulderIcon,
    label: `首・肩`,
    viewBox: '0 0 53 53',
    url: '/icons/neck_shoulder.svg',
  },
  {
    icon: HipJoinKneeFootIcon,
    label: `股関節\n膝・足`,
    viewBox: '0 0 50 55',
    url: '/icons/hip_join_knee_foot.svg',
  },
  {
    icon: SportsInjurIcon,
    label: `スポーツ障害`,
    viewBox: '0 0 37 55',
    url: '/icons/sports_injur.svg',
  },
  {
    icon: WaistIcon,
    label: `腰`,
    viewBox: '0 0 54 49',
    url: '/icons/waist.svg',
  },
  {
    icon: OtherSymptomsIcon,
    label: `腰`,
    viewBox: '0 0 53.297 55.182',
    url: '/icons/other_symptoms.svg',
  },
];

const AdvanceSearchTopPage = () => {
  return (
    <>
      <Box position="relative" minHeight={340} pt={39} pb={32}>
        <Image
          src="/images/search_bg.webp"
          alt="search-image"
          fill
          sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
        />
        <Typography
          position="relative"
          display="block"
          fontWeight="600"
          variant="h5"
          color="orangeBold"
          textAlign="center"
        >
          症状から探す
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="flex-start"
          sx={styles.filterArea}
        >
          {FILTER_ITEMS.map((item) => (
            <CirleBox
              key={item.url}
              icon={item.icon}
              label={item.label}
              iconProps={{ viewBox: item.viewBox }}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={styles.button}
            startIcon={
              <SvgIcon
                component={SearchIcon}
                viewBox="0 0 39 42"
                color="orange"
              />
            }
            endIcon={
              <SvgIcon
                component={ArrowIcon}
                viewBox="0 0 14 30"
                color="orange"
              />
            }
          >
            整体師一覧を見る
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default AdvanceSearchTopPage;
