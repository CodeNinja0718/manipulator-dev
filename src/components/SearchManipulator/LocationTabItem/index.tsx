import Box from '@mui/material/Box';
import DatePicker from 'components/SearchManipulator/DatePicker';
import LocationList from 'components/SearchManipulator/LocationList';
import SymptomListByType from 'components/SearchManipulator/SymptomListByType';
import SymptomType from 'components/SearchManipulator/SymptomType';
import TabItem from 'components/TabItem';
import React from 'react';

interface LocationTabItemProps {
  selectedSymptomType: number;
  onSetSelectedSymptomType: (value: number) => void;
  currentDate: Date | string;
  onSetCurrentDate: (value: Date | string) => void;
  locations: {
    _id: number;
    name: string;
    provinceId: number;
    provinceName: string;
  }[];
  symptoms: {
    _id: number;
    symptomName: string;
    typeId: number;
    typeName: string;
  }[];
  onSelectedSymptoms: (value: number[]) => void;
  onSetSelectedLocation: (value: string[]) => void;
}

const LocationTabItem = ({
  selectedSymptomType = 1,
  onSetSelectedSymptomType,
  currentDate,
  onSetCurrentDate,
  locations,
  symptoms,
  onSelectedSymptoms,
  onSetSelectedLocation,
}: LocationTabItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      width="100%"
      flexDirection={{ xs: 'column', tablet: 'row' }}
    >
      <TabItem>
        <>
          <LocationList
            locations={locations}
            onSetSelectedLocation={onSetSelectedLocation}
          />
          <DatePicker
            currentDate={currentDate}
            onSetCurrentDate={onSetCurrentDate}
            placeholder="時間・日付を選択してください"
          />
        </>
      </TabItem>
      <TabItem>
        <>
          <SymptomType
            selectedSymptomType={selectedSymptomType}
            onSetSelectedSymptomType={onSetSelectedSymptomType}
          />
          <SymptomListByType
            symptoms={symptoms}
            selectedSymptomType={selectedSymptomType}
            onSelectedSymptoms={onSelectedSymptoms}
          />
        </>
      </TabItem>
    </Box>
  );
};

export default LocationTabItem;
