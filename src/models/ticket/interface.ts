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
