export interface Photo {
  type: string;
  url: string;
  objectKey: string;
}
interface Salon {
  _id: string;
  name: string;
  nameKana: string;
  access: string[];
  photos: Photo[];
  features: Feature[];
  addresses?: Address[];
  description: string;
}

interface Feature {
  id: string;
  name: string;
}
interface ReviewRating {
  total: number;
  averageRating: number;
}

export interface Menu {
  menuId: string;
  name: string;
  estimatedTime: number;
  order: number;
  price: number;
  currency: string;
  timeDisplay: boolean;
  ticket: ITicket;
}

export interface ITicket {
  expiryMonth: number;
  id: string;
  numberOfTicket: number;
  numberOfSelectedTicket: number;
  price: number;
  availableCount?: number;
  expiredAt?: string;
  manipulatorNameKana?: string;
  salonNameKana?: string;
}

export interface IReservationMenu extends Omit<Menu, 'menuId' | 'order'> {
  _id: string;
  salonId: string;
  menuTypes: string[];
  createdById: string;
  timeDisplay: boolean;
  ticket: ITicket | any;
}

export interface Station {
  id: number;
  name: string;
}

export interface Address {
  provinceId: number;
  province: string;
  stationIds: number[];
  areaId: number;
  area: string;
  address: string;
  stations: Station[];
  city: string;
  prefectureName: string;
}
export interface IManipulator {
  availableTimes: never[];
  _id: string;
  isFavorite?: boolean;
  timeSlots: string[];
  name: string;
  nameKana: string;
  pr: string;
  profile: string;
  careerStart: string;
  photos: Photo[];
  nationalLicenses: string[];
  salon: Salon[];
  reviewRating: ReviewRating;
  menus: Menu[];
}
