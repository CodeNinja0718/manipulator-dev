const commonQuery = {
  salonCommonData: () => ({
    apiUrl: 'salon/common-data/all',
    queryKey: [],
    staleTime: Infinity,
  }),
  locationList: (provinceId: string) => ({
    apiUrl: `/salon/common-data/prefectures/${provinceId}/areas`,
    queryKey: [provinceId],
    staleTime: Infinity,
  }),
  stationLineList: () => ({
    apiUrl: `/salon/common-data/lines`,
    queryKey: ['locations', 'lines'],
    staleTime: Infinity,
  }),
  stationListByLine: (_id: number) => ({
    apiUrl: `salon/common-data/lines/${_id}/stations`,
    queryKey: [_id],
    staleTime: Infinity,
  }),
};

export default commonQuery;
