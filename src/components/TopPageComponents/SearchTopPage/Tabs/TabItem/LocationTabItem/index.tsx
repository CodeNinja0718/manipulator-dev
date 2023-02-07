import Box from '@mui/material/Box';
import SymptomItem from 'components/TopPageComponents/SearchTopPage/Tabs/SectionOfTab/SymptomItem';
import SymptomList from 'components/TopPageComponents/SearchTopPage/Tabs/SectionOfTab/SymptomList';

import TabItem from '..';

interface LocationTabItemProps {
  selectedSymptom: number;
  onSetSelectedSymptom: (value: number) => void;
}

const LocationTabItem = ({
  selectedSymptom = 0,
  onSetSelectedSymptom,
}: LocationTabItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      width="100%"
      flexDirection={{ xs: 'column', tablet: 'row' }}
    >
      <TabItem>エリアから探す</TabItem>
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

export default LocationTabItem;
