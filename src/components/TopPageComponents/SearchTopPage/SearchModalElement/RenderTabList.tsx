import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import LocationTabItem from 'components/SearchManipulator/LocationTabItem';
import StationTabItem from 'components/SearchManipulator/StationTabItem';

export const renderTabList = (
  selectedSymptomType: number,
  onSetSelectedSymptomType: (value: number) => void,
  currentDate: Date | string | null,
  onSetCurrentDate: (value: Date | string | null) => void,
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
