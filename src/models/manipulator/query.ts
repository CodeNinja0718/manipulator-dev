const manipulatorQuery = {
  searchManiplator: (params: object) => ({
    queryKey: ['manipulator', 'symptoms', 'stations', 'areas'],
    apiUrl: 'account/search/manipulator',
    staleTime: Infinity,
    useUrlQuery: false,
    customParams: {
      ...params,
    },
  }),
};

export default manipulatorQuery;
