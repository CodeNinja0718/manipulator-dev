import type dayjs from 'dayjs';

export interface ITicketItem {
  ticketId: string;
  name: string;
  expiredAt: string;
  status: string;
  availableCount: number;
  salonId: string;
  salonName: string;
  salonNameKana: string;
  ticketName: string;
  manipulatorInfo: {
    manipulatorId: string;
    manipulatorName: string;
    manipulatorNameKana: string;
  };
}

export interface ITicketOfMenu {
  ticket: {
    id: number;
    name: string;
    availableCount: number;
    expiredAt: string;
  };
  manipulatorName: string;
  manipulatorNameKana: string;
  salonName: string;
  salonNameKana: string;
}

export interface ITicketTime {
  startTime: dayjs.Dayjs;
  endTime: dayjs.Dayjs;
}
