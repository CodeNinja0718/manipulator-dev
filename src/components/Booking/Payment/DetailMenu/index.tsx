import IconTag from '@icons/icon_reservation.svg';
import type { SxProps } from '@mui/material';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import isEmpty from 'lodash/isEmpty';
import type { IReservationMenu, ITicket } from 'models/manipulator/interface';
import { NumericFormat } from 'react-number-format';

import styles from './styles';

interface IDetailMenu {
  startTime?: string;
  endTime?: string;
  selectedMenu?: IReservationMenu;
  ticketMenu: ITicket | any;
}

const RenderElement = ({
  startTimeDayjs,
  endTimeDayjs,
  selectedMenu,
  price,
  elementStyles,
}: {
  startTimeDayjs: dayjs.Dayjs;
  endTimeDayjs: dayjs.Dayjs;
  selectedMenu?: IReservationMenu;
  price: number;
  elementStyles: Record<string, SxProps> | any;
}) => {
  return (
    <Stack direction="row" sx={elementStyles} gap={12}>
      <IconTag />
      <Stack gap={4}>
        <Typography fontSize={14}>
          {startTimeDayjs.format('YYYY/MM/DD（ddd）')}
          {`${startTimeDayjs.format('HH:mm')}～${endTimeDayjs.format('HH:mm')}`}
        </Typography>
        <Typography fontWeight="bold">
          {selectedMenu?.name} {selectedMenu?.estimatedTime}分
        </Typography>
        <Typography fontSize={14}>
          {selectedMenu?.estimatedTime}分 /{' '}
          <NumericFormat
            value={price}
            thousandSeparator=","
            suffix="円"
            displayType="text"
          />
        </Typography>
      </Stack>
    </Stack>
  );
};

const DetailMenu = ({
  startTime,
  endTime,
  selectedMenu,
  ticketMenu,
}: IDetailMenu) => {
  const startTimeDayjs = dayjs(startTime).tz();
  const endTimeDayjs = dayjs(endTime).tz();
  const numberOfSelectedTicket = !isEmpty(ticketMenu)
    ? ticketMenu?.ticket?.numberOfSelectedTicket
    : 0;

  const handleRenderTime = () => {
    const tickets = [];

    if (numberOfSelectedTicket > 0) {
      for (let i: number = 0; i < numberOfSelectedTicket; i += 1) {
        const initStartTime: dayjs.Dayjs =
          tickets?.[0]?.endTimeDayjs || startTimeDayjs;
        const initEndTime = initStartTime.add(
          ticketMenu?.estimatedTime || 0,
          'minute',
        );

        tickets.push({
          startTimeDayjs: initStartTime,
          endTimeDayjs: initEndTime,
        });
      }
    }

    return tickets;
  };
  const tickets = handleRenderTime();

  return isEmpty(tickets) ? (
    <RenderElement
      startTimeDayjs={startTimeDayjs}
      endTimeDayjs={endTimeDayjs}
      selectedMenu={selectedMenu}
      price={selectedMenu?.price || 0}
      elementStyles={styles.menuDetailWrapper}
    />
  ) : (
    <Stack mb={25}>
      {tickets.map((item, id) => (
        <RenderElement
          key={`menu-time-${id}`}
          startTimeDayjs={item.startTimeDayjs}
          endTimeDayjs={item.endTimeDayjs}
          selectedMenu={selectedMenu}
          price={ticketMenu?.ticket?.price || 0}
          elementStyles={styles.ticketMenuDetailWrapper}
        />
      ))}
    </Stack>
  );
};
export default DetailMenu;
