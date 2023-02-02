import type { Gender } from 'utils/type';

export interface ICustomer {
  id: string;
  name: string;
  nameKana: string;
  phone: string;
  email: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
  gender?: Gender;
}

export interface LoginResponse {
  token: {
    token: string;
  };
}

export interface SendOtpPayload {
  phoneNumber: string;
}

export type VerifyOtpPayload =
  | { phoneNumber: string; code: string }
  | { identity: string; password: string };

export interface CustomerRegisterPayload
  extends Pick<ICustomer, 'name' | 'nameKana' | 'phone' | 'email' | 'gender'> {
  token: string;
}
