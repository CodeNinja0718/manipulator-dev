import IconSlotAvailable from '@icons/icon_slot_available.svg';
import IconSlotUnavailable from '@icons/icon_slot_unavailable.svg';
import { IconButton, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { WORK_TIMES } from 'utils/const';

import styles from './styles';

interface SlotColumnProps {
  date: dayjs.Dayjs;
  availableSlots: string[];
}

const SlotColumn: React.FC<SlotColumnProps> = ({ date, availableSlots }) => {
  const currentDate = dayjs().tz().startOf('day');

  return (
    <Stack flex="0 0 70px">
      <Stack
        sx={styles.slotHeader}
        alignItems="center"
        justifyContent="center"
        direction="row"
        gap={4}
        data-current={date.isSame(currentDate, 'day')}
      >
        {date.format('DD')}
        <span>({date.format('ddd')})</span>
      </Stack>
      {WORK_TIMES.map((time) => {
        const timeSplit = time.split(':');
        const slotDateTime = date
          .add(Number(timeSplit[0]) || 0, 'h')
          .add(Number(timeSplit[1]) || 0, 'm');
        const slotAvailable = availableSlots.includes(
          slotDateTime.toISOString(),
        );

        return (
          <Stack
            key={time}
            justifyContent="center"
            alignItems="center"
            sx={styles.slotCell}
            data-current={date.isSame(currentDate, 'day')}
          >
            <IconButton sx={styles.slotBtn} disabled={!slotAvailable}>
              {slotAvailable ? <IconSlotAvailable /> : <IconSlotUnavailable />}
            </IconButton>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default SlotColumn;
