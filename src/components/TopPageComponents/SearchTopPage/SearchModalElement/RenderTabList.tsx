import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import LocationTabItem from 'components/SearchManipulator/LocationTabItem';
import StationTabItem from 'components/SearchManipulator/StationTabItem';
import { useEffect } from 'react';

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
    groupId: string;
  }[],
  onSelectedSymptoms: (value: number[]) => void,
  onSetSelectedLocation: (value: string[]) => void,
  onSetSelectedStation: (value: string[]) => void,
  selectedDefaultLocations: string[],
  selectedDefaultSymptoms: number[],
  setSelectedDefaultSymptoms: (value:number[]) =>void,
  selectedDefaultStations:string[],
  selectedLine: number,
  setSelectedLine : (value:number) => void
) => {

  useEffect(()=>{
    if(selectedDefaultSymptoms.length > 0) {
      const firstID = selectedDefaultSymptoms[0] || 1
      const defaultSymptomId : number = symptoms.find(item => item._id === firstID)?.typeId || 1
      onSetSelectedSymptomType(defaultSymptomId)
     
    }
  },[selectedDefaultSymptoms,symptoms])
  

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
          selectedDefaultLocations={selectedDefaultLocations}
          selectedDefaultSymptoms={selectedDefaultSymptoms}
          setSelectedDefaultSymptoms={setSelectedDefaultSymptoms}
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
          selectedDefaultSymptoms={selectedDefaultSymptoms}
          setSelectedDefaultSymptoms={setSelectedDefaultSymptoms}
          selectedDefaultStations={selectedDefaultStations}
          selectedLine={selectedLine}
          setSelectedLine={setSelectedLine}
        />
      ),
    },
  ];
  return list;
};
