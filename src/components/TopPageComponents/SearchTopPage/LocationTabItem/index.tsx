import Box from '@mui/material/Box';
import DatePicker from 'components/TopPageComponents/SearchTopPage/DatePicker';
import LocationList from 'components/TopPageComponents/SearchTopPage/LocationList';
import SymptomListByType from 'components/TopPageComponents/SearchTopPage/SymptomListByType';
import SymptomType from 'components/TopPageComponents/SearchTopPage/SymptomType';
import TabItem from 'components/TopPageComponents/SearchTopPage/TabItem';
import React from 'react';

interface LocationTabItemProps {
  selectedSymptom: number;
  onSetSelectedSymptom: (value: number) => void;
  currentDate: Date | string;
  onSetCurrentDate: (value: Date | string) => void;
}

const LocationTabItem = ({
  selectedSymptom = 0,
  onSetSelectedSymptom,
  currentDate,
  onSetCurrentDate,
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
          <LocationList />
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
            selectedSymptom={selectedSymptom}
            onSetSelectedSymptom={onSetSelectedSymptom}
          />
          <SymptomListByType />
        </>
      </TabItem>
    </Box>
  );
};

export default LocationTabItem;
