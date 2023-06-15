import type dayjs from 'dayjs';
import type { Photo } from 'models/manipulator/interface';

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
    photos: Photo[];
  };
}

export interface IAvailableTicket {
  ticketId: string;
  ticketName: string;
  ticketPrice: number;
  expiryMonth: number;
  numberOfTickets: number;
  menuId: string;
  estimatedTime: number;
  status: string;
  salonName: string;
  salonNameKana: string;
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
