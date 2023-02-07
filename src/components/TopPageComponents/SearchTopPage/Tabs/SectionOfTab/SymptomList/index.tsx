import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleBox from 'components/CircleBox';
import { FILTER_ITEMS } from 'components/TopPageComponents/SearchTopPage/const';

import styles from './styles';

interface SymptomListProps {
  selectedSymptom: number;
  onSetSelectedSymptom: (value: number) => void;
}

const SymptomList = ({
  selectedSymptom = 0,
  onSetSelectedSymptom,
}: SymptomListProps) => {
  const handleSelected = (value: number) => {
    onSetSelectedSymptom(value);
  };

  return (
    <Box display="flex" width="100%" sx={styles.symptomBox}>
      <Typography color="orangeBold" sx={styles.title}>
        症状
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        sx={styles.symptomElement}
      >
        {FILTER_ITEMS.map((item, index) => (
          <CircleBox
            key={item.url}
            icon={item.icon}
            label={item.label}
            iconProps={{
              viewBox: item.viewBox,
            }}
            sxCustom={{ ...styles.circleBox }}
            active={selectedSymptom === index}
            onClick={() => handleSelected(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SymptomList;
