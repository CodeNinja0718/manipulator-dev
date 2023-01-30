import ArrowIcon from '@icons/arrow.svg';
import AutonomicNervesIcon from '@icons/autonomic_nerves.svg';
import HipJoinKneeFootIcon from '@icons/hip_join_knee_foot.svg';
import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import NeckShoulderIcon from '@icons/neck_shoulder.svg';
import OtherSymptomsIcon from '@icons/other_symptoms.svg';
import SearchIcon from '@icons/search.svg';
import SportsInjurIcon from '@icons/sports_injur.svg';
import WaistIcon from '@icons/waist.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import CircleBox from 'components/CircleBox';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react';

import styles from './styles';

const SearchModalTopPage = dynamic(
  () => import('components/TopPageComponents/SearchModalTopPage'),
);

const TabLabel = ({
  label,
  style = {},
  icon,
}: {
  label: string;
  style?: object;
  icon: React.ElementType;
}) => {
  return (
    <Box display="flex" alignItems="center">
      <SvgIcon component={icon} viewBox="0 0 29 35" sx={style} />
      <Typography pl={7.5} fontWeight={600}>
        {label}
      </Typography>
    </Box>
  );
};

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

const TABS = [
  {
    label: (
      <TabLabel
        label="エリアから探す"
        icon={LocationIcon}
        style={{
          width: 16,
          height: 19,
        }}
      />
    ),
    component: <Box>This is text of item one</Box>,
  },
  {
    label: (
      <TabLabel
        label="駅から探す"
        icon={StationIcon}
        style={{
          width: 16,
          height: 23,
        }}
      />
    ),
    component: <Box>This is text of item two</Box>,
  },
];

const AdvanceSearchTopPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box position="relative" minHeight={340} pt={39} pb={32}>
        <Image
          src="/images/wood_bg.webp"
          alt="wood-image"
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
            <CircleBox
              key={item.url}
              icon={item.icon}
              label={item.label}
              iconProps={{ viewBox: item.viewBox }}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="center" paddingX="15px">
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
            onClick={handleOpen}
          >
            整体師一覧を見る
          </Button>
        </Box>
      </Box>

      <SearchModalTopPage open={open} tabs={TABS} onClose={handleClose} />
    </>
  );
};
export default AdvanceSearchTopPage;
