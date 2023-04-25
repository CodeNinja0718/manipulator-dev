import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleBox from 'components/CircleBox';
import { FILTER_ITEMS } from 'components/SearchManipulator/SymptomType/const';

import styles from './styles';

interface SymptomTypeProps {
  selectedSymptomType: number;
  onSetSelectedSymptomType: (value: number) => void;
  setSelectedDefaultSymptoms: (value:number[]) =>void
}

const SymptomType = ({
  onSetSelectedSymptomType,
  selectedSymptomType,
  setSelectedDefaultSymptoms
}: SymptomTypeProps) => {

  const handleSelected = (value: number) => {
    onSetSelectedSymptomType(value);
    setSelectedDefaultSymptoms([])
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
            active={selectedSymptomType === item._id}
            onClick={() => handleSelected(index + 1)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SymptomType;
