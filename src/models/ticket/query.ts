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
};

export default ticketQuery;
