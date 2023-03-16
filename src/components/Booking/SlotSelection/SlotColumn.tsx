import IconSlotAvailable from '@icons/icon_slot_available.svg';
import IconSlotUnavailable from '@icons/icon_slot_unavailable.svg';
import { IconButton, Stack } from '@mui/material';
import dayjs from 'dayjs';
import difference from 'lodash/difference';
import times from 'lodash/times';
import type { IReservationMenu } from 'models/manipulator/interface';
import { WORK_TIMES } from 'utils/const';

import styles from './styles';

interface SlotColumnProps {
  selectedMenu?: IReservationMenu;
  date: dayjs.Dayjs;
  availableSlots: string[];
  handleSelectSlot: (date: dayjs.Dayjs) => void;
  isLoading?: boolean;
}

const SlotColumn: React.FC<SlotColumnProps> = ({
  selectedMenu,
  date,
  availableSlots,
  handleSelectSlot,
  isLoading,
}) => {
  const currentDateTime = dayjs().tz();
  const currentDate = dayjs().tz().startOf('day');

  return (
    <Stack flex="auto">
      <Stack
        sx={styles.slotHeader}
        alignItems="center"
        justifyContent="center"
        direction={{
          xs: 'column',
          tablet: 'row',
        }}
        gap="0 4px"
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
        const menuSlots = times(
          selectedMenu?.estimatedTime ? selectedMenu.estimatedTime / 30 + 1 : 0,
        ).map((i) => slotDateTime.add(i ? i * 30 : 0, 'minute').toISOString());
        const slotAvailable =
          currentDateTime.isBefore(slotDateTime, 'minute') &&
          availableSlots.includes(slotDateTime.toISOString()) &&
          difference(menuSlots, availableSlots).length === 0;

        return (
          <Stack
            key={time}
            justifyContent="center"
            alignItems="center"
            sx={styles.slotCell}
            data-current={date.isSame(currentDate, 'day')}
          >
            {!isLoading && (
              <IconButton
                sx={styles.slotBtn}
                disabled={!slotAvailable}
                onClick={() => {
                  if (slotAvailable) {
                    handleSelectSlot(slotDateTime);
                  }
                }}
              >
                {slotAvailable ? (
                  <IconSlotAvailable />
                ) : (
                  <IconSlotUnavailable />
                )}
              </IconButton>
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default SlotColumn;
