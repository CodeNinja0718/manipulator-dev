import type { ConfirmModalProps } from 'components/ConfirmModal/modal';
import { isEmpty } from 'lodash';
import type { CreateReservationPayload } from 'models/reservation/interface';
import create from 'zustand';

export interface GlobalState {
  openDrawer: boolean;
  openConfirmModal: boolean;
  toggleConfirmModal: (payload: boolean) => void;
  confirmModal: ConfirmModalProps | {};
  setConfirmModal: (payload: ConfirmModalProps | {}) => void;
  setOpenDrawer: (payload: boolean) => void;
  booking: CreateReservationPayload;
  setBooking: (payload: any) => void;
  redirectLogin: string;
  setRedirectLogin: (payload: string) => void;
}
const useGlobalState = create<GlobalState>((set) => ({
  openConfirmModal: false,
  openDrawer: false,
  toggleConfirmModal: (payload) => set({ openConfirmModal: payload }),
  confirmModal: {},
  setConfirmModal: (payload) =>
    set({ confirmModal: payload, openConfirmModal: !isEmpty(payload) }),
  setOpenDrawer: (payload = false) => set({ openDrawer: payload }),
  booking: {},
  setBooking: (payload) => set({ booking: payload }),
  redirectLogin: '/',
  setRedirectLogin: (payload) => set({ redirectLogin: payload }),
}));

export default useGlobalState;
