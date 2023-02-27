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
  detailManiplator: (maniplatorId: string) => ({
    apiUrl: `/reservation/manipulators/${maniplatorId}`,
    queryKey: [maniplatorId],
    staleTime: Infinity,
  }),
};

export default manipulatorQuery;
