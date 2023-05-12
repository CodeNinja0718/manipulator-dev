const ticketQuery = {
  getTickets: {
    staleTime: Infinity,
    apiUrl: '/coupon/customer/tickets',
    queryKey: ['currentUser', 'ticket-list'],
  },
  getInfoOfTicket: (
    manipulatorId: string | any,
    menuId: string | any,
    isTicket: boolean,
  ) => ({
    staleTime: Infinity,
    apiUrl: `/coupon/customer/tickets/${manipulatorId}/menu/${menuId}`,
    queryKey: [
      'manipulatorId',
      'menuId',
      'infor-ticket',
      manipulatorId,
      menuId,
    ],
    enabled: !!manipulatorId && !!menuId && isTicket,
  }),
  getManipulatorTickets: (manipulatorId: string) => ({
    apiUrl: `/coupon/customer/tickets/${manipulatorId}`,
    queryKey: ['ticketList', 'manipulator-tickets', manipulatorId],
    staleTime: 2 * 60 * 1000,
  }),
  buyTicket: {
    apiUrl: `/coupon/customer/tickets/buy-tickets`,
    method: 'post',
    successMessage: 'Buy ticket successfully!',
  },
};

export default ticketQuery;
