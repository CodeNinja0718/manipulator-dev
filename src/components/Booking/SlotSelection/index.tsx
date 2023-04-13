import ArrowLeft from '@icons/arrow-left.svg';
import ArrowRight from '@icons/arrow-right.svg';
import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useFetch } from 'hooks';
import isEmpty from 'lodash/isEmpty';
import times from 'lodash/times';
import type { IReservationMenu, ITicket } from 'models/manipulator/interface';
import manipulatorQuery from 'models/manipulator/query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { STEPPER_CONTENT } from 'utils/const';

import SlotColumn from './SlotColumn';
import styles from './styles';
import TimeSlot from './TimeColumn';

interface BookingSlotSelectionProps {
  selectedMenu?: IReservationMenu;
  handleChangeStep: (step: string) => void;
  onSubmit: (values: Record<string, unknown>) => void;
  ticketMenu: ITicket | any;
}

const BookingSlotSelection: React.FC<BookingSlotSelectionProps> = ({
  selectedMenu,
  handleChangeStep,
  onSubmit,
  ticketMenu,
}) => {
  const router = useRouter();
  const { slug } = router.query;
  const manipulatorId = slug![0] || '';

  const [date, setDate] = useState(dayjs().tz().startOf('day'));

  const { data: manipulatorTimeSlots, isLoading } = useFetch<{
    availableSlots: string[];
  }>({
    ...manipulatorQuery.manipulatorTimeSlots({
      manipulatorId,
      startTime: date.toISOString(),
      endTime: date.add(7, 'day').toISOString(),
    }),
    staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    if (isEmpty(selectedMenu)) {
      handleChangeStep(STEPPER_CONTENT[0].value);
    }
  }, [handleChangeStep, selectedMenu]);

  const estimatedTime =
    (selectedMenu?.estimatedTime || 0) *
    (ticketMenu?.ticket?.numberOfSelectedTicket || 1);

  const currentSelectedMenu: IReservationMenu | any = {
    ...selectedMenu,
    estimatedTime,
  };

  const handleSelectSlot = (selectedDate: dayjs.Dayjs) => {
    onSubmit({
      startTime: selectedDate.toISOString(),
      endTime: selectedDate
        .add(currentSelectedMenu?.estimatedTime || 0, 'minute')
        .toISOString(),
    });
  };

  return (
    <Stack sx={styles.bookingSlotWrapper}>
      <Stack direction="row" gap={24} sx={styles.selectedMenu}>
        <Typography fontWeight="bold">メニュー</Typography>
        <Typography>
          {currentSelectedMenu?.name}&nbsp;&nbsp;
          {currentSelectedMenu?.estimatedTime}分
        </Typography>
      </Stack>
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
            ? `${date.get('month') + 1}月`
            : `${date.get('month') + 1}月/${
                date.add(7, 'day').get('month') + 1
              }月`}
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
        {isLoading && (
          <Box sx={styles.loadingBar}>
            <LinearProgress />
          </Box>
        )}
        <TimeSlot />
        {times(7).map((index) => {
          const slotDate = date.add(index, 'day');
          return (
            <SlotColumn
              selectedMenu={currentSelectedMenu}
              date={slotDate}
              key={index}
              availableSlots={manipulatorTimeSlots?.availableSlots || []}
              handleSelectSlot={handleSelectSlot}
              isLoading={isLoading}
            />
          );
        })}
      </Stack>
      <Typography
        onClick={() => handleChangeStep(STEPPER_CONTENT[0].value)}
        sx={styles.backStep}
      >
        <ArrowLeft />
        メニュー選択に戻る
      </Typography>
    </Stack>
  );
};

export default BookingSlotSelection;
