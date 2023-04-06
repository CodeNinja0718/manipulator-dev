const ticketQuery = {
  getTickets: {
    apiUrl: '/customer/tickets',
    queryKey: ['currentUser', 'ticket-list'],
  },
};

export default ticketQuery;
