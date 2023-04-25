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
  currentDate: Date | string | null;
  onSetCurrentDate: (value: Date | string | null) => void;
  symptoms: {
    _id: number;
    symptomName: string;
    typeId: number;
    typeName: string;
  }[];
  lines: {
    _id: number;
    name: string;
    groupId: string;
  }[];
  onSelectedSymptoms: (value: number[]) => void;
  onSetSelectedStation: (value: string[]) => void;
  selectedDefaultSymptoms: number[]
  setSelectedDefaultSymptoms: (value:number[]) =>void
  selectedDefaultStations : string[]
  setSelectedLine : (value:number) => void,
  selectedLine : number
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
  selectedDefaultSymptoms,
  setSelectedDefaultSymptoms,
  selectedDefaultStations,
  setSelectedLine,
  selectedLine
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
            selectedDefaultStations={selectedDefaultStations}
            selectedLine={selectedLine}
            setSelectedLine={setSelectedLine}
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
            setSelectedDefaultSymptoms={setSelectedDefaultSymptoms}
          />
          <SymptomListByType
            symptoms={symptoms}
            selectedSymptomType={selectedSymptomType}
            onSelectedSymptoms={onSelectedSymptoms}
            selectedDefaultSymptoms={selectedDefaultSymptoms}
          />
        </>
      </TabItem>
    </Box>
  );
};

export default StationTabItem;
