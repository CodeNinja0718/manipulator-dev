const cardQuery = {
  getCardToken: {
    apiUrl: '/api/veritrans',
    axiosConfig: {
      baseURL: '/',
    },
  },
  addCard: {
    apiUrl: '/payment/customer/payment-methods',
    successMessage: 'お支払い方法を追加しました',
  },
};

export default cardQuery;
