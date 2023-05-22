const discountQuery = {
  getDiscounts: ({ type, ...args }: Record<string, unknown>) => ({
    apiUrl: '/coupon/customer/coupons',
    queryKey: ['currentUser', 'coupons-list', type],
    customParams: {
      type,
      ...args,
    },
    staleTime: 1000 * 60 * 2,
  }),
};

export default discountQuery;
