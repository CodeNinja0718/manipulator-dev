const manipulatorQuery = {
  createReservation: {
    apiUrl: '/reservation/customer/reservations',
    method: 'post',
    successMessage: 'Create reservation successfully',
  },
  getReservations: {
    apiUrl: '/reservation/customer/reservations',
    queryKey: ['currentUser', 'reservation-list'],
  },
};

export default manipulatorQuery;
