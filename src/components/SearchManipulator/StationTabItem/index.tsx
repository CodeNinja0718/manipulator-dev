import Box from '@mui/material/Box';
import DatePicker from 'components/SearchManipulator/DatePicker';
import StationList from 'components/SearchManipulator/StationList';
import SymptomListByType from 'components/SearchManipulator/SymptomListByType';
import SymptomType from 'components/SearchManipulator/SymptomType';
import TabItem from 'components/TabItem';
import React from 'react';

interface StationTabItemProps {
  selectedSymptomType: number;
  onSetSelectedSymptomType: (value: number) => void;
  currentDate: Date | string;
  onSetCurrentDate: (value: Date | string) => void;
  symptoms: {
    _id: number;
    symptomName: string;
    typeId: number;
    typeName: string;
  }[];
  lines: {
    _id: number;
    name: string;
  }[];
  onSelectedSymptoms: (value: number[]) => void;
  onSetSelectedStation: (value: string[]) => void;
}

const StationTabItem = ({
  selectedSymptomType = 1,
  onSetSelectedSymptomType,
  currentDate,
  onSetCurrentDate,
  symptoms,
  onSelectedSymptoms,
  lines,
  onSetSelectedStation,
}: StationTabItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      width="100%"
      flexDirection={{ xs: 'column', tablet: 'row' }}
    >
      <TabItem>
        <>
          <StationList
            lines={lines}
            onSetSelectedStation={onSetSelectedStation}
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

export default StationTabItem;
