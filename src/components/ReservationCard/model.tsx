export interface ReservationCardModel {
  id?: string;
  avatar: string;
  position: string;
  salonName: string;
  status: string;
  date: Date;
  startTime: string;
  endTime: string;
  firstVisitPrice: string;
  couponA: string;
  couponB: string;
  amountPayment: string;
  expectedPayment: string;
  cancellationDate: Date;
}
