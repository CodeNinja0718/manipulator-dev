const ticketQuery = {
  getTickets: {
    staleTime: Infinity,
    apiUrl: '/coupon/customer/tickets',
    queryKey: ['currentUser', 'ticket-list'],
  },
  getInfoOfTicket: (manipulatorId: string | any, menuId: string | any) => ({
    staleTime: Infinity,
    apiUrl: `/coupon/customer/tickets/${manipulatorId}/menu/${menuId}`,
    queryKey: ['manipulatorId', 'menuId', 'infor-ticket'],
    enabled: !!manipulatorId && !!menuId,
  }),
};

export default ticketQuery;
