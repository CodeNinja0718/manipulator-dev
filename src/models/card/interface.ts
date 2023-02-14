import type { ValidCardNiceType } from 'utils/const';

export interface AddCardPayload {
  token: string;
}

export interface ICardItem {
  id: string;
  kind: string;
  type: string;
  details: {
    kind: string;
    expireMonth: string;
    expireYear: string;
    lastNumber: string;
    default: boolean;
    brand: ValidCardNiceType;
  };
}
