const commonQuery = {
  salonCommonData: () => ({
    apiUrl: 'salon/common-data/all',
    queryKey: [],
  }),
  locationList: (provinceId: string) => ({
    apiUrl: `/salon/common-data/prefectures/${provinceId}/areas`,
    queryKey: [provinceId],
  }),
  stationLineList: () => ({
    apiUrl: `/salon/common-data/lines`,
    queryKey: ['locations', 'lines'],
  }),
  stationListByLine: (_id: number) => ({
    apiUrl: `salon/common-data/lines/${_id}/stations`,
    queryKey: [_id],
  }),
};

export default commonQuery;
