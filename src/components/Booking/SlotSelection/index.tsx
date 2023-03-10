import ArrowLeft from '@icons/arrow-left.svg';
import ArrowRight from '@icons/arrow-right.svg';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useFetch } from 'hooks';
import times from 'lodash/times';
import manipulatorQuery from 'models/manipulator/query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import SlotColumn from './SlotColumn';
import styles from './styles';
import TimeSlot from './TimeColumn';

interface BookingSlotSelectionProps {
  handleChangeStep: (step: string) => void;
}

const BookingSlotSelection: React.FC<BookingSlotSelectionProps> = ({
  handleChangeStep,
}) => {
  const router = useRouter();
  const { slug } = router.query;
  const manipulatorId = slug![0] || '';

  const [date, setDate] = useState(dayjs().tz().startOf('day'));

  const { data: manipulatorTimeSlots } = useFetch<{
    availableSlots: string[];
  }>({
    ...manipulatorQuery.manipulatorTimeSlots({
      manipulatorId,
      startTime: date.toISOString(),
      endTime: date.add(7, 'day').toISOString(),
    }),
    staleTime: 1000 * 60 * 2,
  });

  return (
    <Stack sx={styles.bookingSlotWrapper}>
      <Typography color="secondary" fontSize={18} fontWeight="bold" mb={18}>
        ご希望の日時を選択してください
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={styles.dateControl}
      >
        <Typography
          onClick={() => setDate(date.add(-7, 'day'))}
          className="control-btn"
          data-disabled={date.add(-7, 'day').isBefore(dayjs().tz(), 'day')}
        >
          <ArrowLeft />
          前の週へ
        </Typography>
        <Typography fontSize={18} color="black" fontWeight="bold">
          {date.add(7, 'day').isSame(date, 'month')
            ? `${date.get('month')}月`
            : `${date.get('month')}/${date.add(7, 'day').get('month')}月`}
        </Typography>
        <Typography
          onClick={() => setDate(date.add(7, 'day'))}
          className="control-btn"
        >
          次の週へ
          <ArrowRight />
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="start" sx={styles.slotTableWrapper}>
        <TimeSlot />
        {times(7).map((index) => {
          const slotDate = date.add(index, 'day');
          return (
            <SlotColumn
              date={slotDate}
              key={index}
              availableSlots={manipulatorTimeSlots?.availableSlots || []}
            />
          );
        })}
      </Stack>
      <Typography onClick={() => handleChangeStep('menu')} sx={styles.backStep}>
        <ArrowLeft />
        メニュー選択に戻る
      </Typography>
    </Stack>
  );
};

export default BookingSlotSelection;
