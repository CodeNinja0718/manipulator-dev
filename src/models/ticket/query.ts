const ticketQuery = {
  getTickets: {
    staleTime: Infinity,
    apiUrl: '/coupon/customer/tickets',
    queryKey: ['currentUser', 'ticket-list'],
  },
};

export default ticketQuery;
