import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import { Box, CircularProgress } from '@mui/material';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import dynamic from 'next/dynamic';

import styles from './styles';

const RenderLoading = () => {
  return (
    <Box sx={styles.loadingBox}>
      <CircularProgress size="small" sx={styles.loading} />
    </Box>
  );
};

const LocationTabItem = dynamic(
  () => import('components/SearchManipulator/LocationTabItem'),
  {
    loading: () => <RenderLoading />,
  },
);

const StationTabItem = dynamic(
  () => import('components/SearchManipulator/StationTabItem'),
  {
    loading: () => <RenderLoading />,
  },
);

export const renderTabList = (
  selectedSymptomType: number,
  onSetSelectedSymptomType: (value: number) => void,
  currentDate: Date | string,
  onSetCurrentDate: (value: Date | string) => void,
  locations: {
    _id: number;
    name: string;
    provinceId: number;
    provinceName: string;
  }[],
  symptoms: {
    _id: number;
    symptomName: string;
    typeId: number;
    typeName: string;
  }[],
  lines: {
    _id: number;
    name: string;
  }[],
  onSelectedSymptoms: (value: number[]) => void,
  onSetSelectedLocation: (value: string[]) => void,
  onSetSelectedStation: (value: string[]) => void,
) => {
  const list = [
    {
      label: (
        <TabLabelItem
          label="エリアから探す"
          icon={LocationIcon}
          style={{
            width: 16,
            height: 19,
          }}
        />
      ),
      component: (
        <LocationTabItem
          selectedSymptomType={selectedSymptomType}
          onSetSelectedSymptomType={onSetSelectedSymptomType}
          currentDate={currentDate}
          onSetCurrentDate={onSetCurrentDate}
          locations={locations}
          symptoms={symptoms}
          onSelectedSymptoms={onSelectedSymptoms}
          onSetSelectedLocation={onSetSelectedLocation}
        />
      ),
    },
    {
      label: (
        <TabLabelItem
          label="駅から探す"
          icon={StationIcon}
          style={{
            width: 16,
            height: 23,
          }}
        />
      ),
      component: (
        <StationTabItem
          selectedSymptomType={selectedSymptomType}
          onSetSelectedSymptomType={onSetSelectedSymptomType}
          currentDate={currentDate}
          onSetCurrentDate={onSetCurrentDate}
          symptoms={symptoms}
          lines={lines}
          onSelectedSymptoms={onSelectedSymptoms}
          onSetSelectedStation={onSetSelectedStation}
        />
      ),
    },
  ];
  return list;
};
