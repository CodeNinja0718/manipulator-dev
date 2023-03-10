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
    queryKey: ['manipulator-detail', maniplatorId],
  }),
  manipulatorMenus: (manipulatorId: string) => ({
    apiUrl: `/reservation/manipulators/${manipulatorId}/menus`,
    queryKey: ['manipulator-menus', manipulatorId],
  }),
  manipulatorTimeSlots: ({
    manipulatorId,
    ...params
  }: Record<string, unknown>) => ({
    apiUrl: `/reservation/manipulators/${manipulatorId}/get-available-timeslots`,
    customParams: params,
    queryKey: ['manipulator-time-slots', { ...params, manipulatorId }],
  }),
};

export default manipulatorQuery;
