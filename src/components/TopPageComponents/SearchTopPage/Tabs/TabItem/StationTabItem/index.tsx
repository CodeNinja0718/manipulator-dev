import Box from '@mui/material/Box';
import SymptomItem from 'components/TopPageComponents/SearchTopPage/Tabs/SectionOfTab/SymptomItem';
import SymptomList from 'components/TopPageComponents/SearchTopPage/Tabs/SectionOfTab/SymptomList';

import TabItem from '..';

interface StationTabItemProps {
  selectedSymptom: number;
  onSetSelectedSymptom: (value: number) => void;
}

const StationTabItem = ({
  selectedSymptom = 0,
  onSetSelectedSymptom,
}: StationTabItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      width="100%"
      flexDirection={{ xs: 'column', tablet: 'row' }}
    >
      <TabItem>駅から探す</TabItem>
      <TabItem>
        <>
          <SymptomList
            selectedSymptom={selectedSymptom}
            onSetSelectedSymptom={onSetSelectedSymptom}
          />
          <SymptomItem />
        </>
      </TabItem>
    </Box>
  );
};

export default StationTabItem;
