const cardQuery = {
  getCardToken: {
    apiUrl: '/api/veritrans',
    axiosConfig: {
      baseURL: '/',
    },
  },
  setDefaultCard: {
    apiUrl: (params: Record<string, unknown>) =>
      `/payment/customer/payment-methods/${params.id}`,
    method: 'put',
    successMessage: 'Change payment successfully',
    omitKeys: ['id'],
  },
  addCard: {
    apiUrl: '/payment/customer/payment-methods',
    successMessage: 'お支払い方法を追加しました',
  },
  cardList: {
    apiUrl: '/payment/customer/payment-methods',
    queryKey: ['currentUser', 'card-list'],
    customParams: {
      type: 'CARD',
    },
  },
  deleteCard: {
    apiUrl: (params: Record<string, unknown>) =>
      `/payment/customer/payment-methods/${params.id}`,
    method: 'delete',
    successMessage: 'お支払い方法を削除しました',
  },
};

export default cardQuery;
