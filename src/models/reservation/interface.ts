import type { ICoupon } from 'models/discount/interface';
import type { Photo } from 'models/manipulator/interface';

interface ITicket {
  expiryMonth: number;
  id: string;
  numberOfTicket: number;
  numberOfSelectedTicket: number;
  price: number;
}
export interface CreateReservationPayload {
  startTime?: string;
  endTime?: string;
  menuId?: string;
  manipulatorId?: string;
  paymentMethod?: string;
  ticket?: ITicket;
  selectedMenuType?: string;
  coupon?: ICoupon;
}

export enum ReservationStatus {
  RESERVED = 'RESERVED',
  FREE_CANCELED = 'FREE_CANCELED',
  PAID_CANCELED = 'PAID_CANCELED',
  DONE = 'DONE',
}

export interface IReservationPlan {
  originalPrice: number;
  discountAmount: number;
  finalPrice: number;
  menuId: string;
  menuInfo: {
    currency: string;
    estimatedTime: number;
    menuId: string;
    name: string;
    order: number;
    price: number;
    status: string;
  };
}

export interface IReservationItem {
  _id: string;
  cancelDeadline: string;
  endTime: string;
  startTime: string;
  status: ReservationStatus;
  manipulatorInfo: {
    email: string;
    manipulatorId: string;
    name: string;
    nameKana: string;
    photos: Photo[];
  };
  salonInfo: {
    salonId: string;
    name: string;
    nameKana: string;
  };
  plan: IReservationPlan;
  result: IReservationPlan;
  ticketUsed: number;
  couponDiscount: number;
}
