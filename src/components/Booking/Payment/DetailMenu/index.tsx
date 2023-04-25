import IconTag from '@icons/icon_reservation.svg';
import type { SxProps } from '@mui/material';
import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import isEmpty from 'lodash/isEmpty';
import type { IReservationMenu, ITicket } from 'models/manipulator/interface';
import type { ITicketTime } from 'models/ticket/interface';
import { NumericFormat } from 'react-number-format';

import styles from './styles';

interface IDetailMenu {
  startTime?: string;
  endTime?: string;
  selectedMenu?: IReservationMenu;
  ticketMenu: ITicket | any;
  ticketsTimeList: ITicketTime[];
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
  ticketsTimeList,
}: IDetailMenu) => {
  const startTimeDayjs = dayjs(startTime).tz();
  const endTimeDayjs = dayjs(endTime).tz();

  return isEmpty(ticketsTimeList) ? (
    <RenderElement
      startTimeDayjs={startTimeDayjs}
      endTimeDayjs={endTimeDayjs}
      selectedMenu={selectedMenu}
      price={selectedMenu?.price || 0}
      elementStyles={styles.menuDetailWrapper}
    />
  ) : (
    <Stack mb={25}>
      {ticketsTimeList.map((item, id) => (
        <RenderElement
          key={`menu-time-${id}`}
          startTimeDayjs={item.startTime}
          endTimeDayjs={item.endTime}
          selectedMenu={selectedMenu}
          price={ticketMenu?.ticket?.price || 0}
          elementStyles={styles.ticketMenuDetailWrapper}
        />
      ))}
    </Stack>
  );
};
export default DetailMenu;
