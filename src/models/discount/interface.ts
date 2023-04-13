export const PRIVATE_COUPON = 'Private';
export const PUBLIC_COUPON = 'Public';

export interface ICouponsResponse {
  items: ICoupon[];
  page: number;
  perPage: number;
  total: number;
  lastPage: number;
}

export interface ICoupon {
  id: number;
  code: string;
  title: string;
  description: string;
  currency: string;
  amount: number;
  menus: ICouponMenu[];
  expiredAt: string;
  quantumIssueUsage: number;
}

interface ICouponMenu {
  id: string;
  name: string;
}
