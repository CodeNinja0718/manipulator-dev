import { Box, Stack } from '@mui/material';
import { WORK_TIMES } from 'utils/const';

import styles from './styles';

const TimeColumn = () => {
  return (
    <Stack flex="0 0 78px">
      <Box sx={styles.slotHeader} />
      {WORK_TIMES.map((time) => {
        return (
          <Stack
            key={time}
            justifyContent="center"
            sx={styles.slotCell}
            pl={10}
          >
            {time}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default TimeColumn;
