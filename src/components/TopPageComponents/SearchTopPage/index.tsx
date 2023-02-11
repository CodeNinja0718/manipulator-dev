import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import LoadingOverlay from 'components/LoadingOverlay';
import SearchModal from 'components/SearchModal';
import AdvanceSearch from 'components/TopPageComponents/SearchTopPage/AdvanceSearch';
import DefaultSearch from 'components/TopPageComponents/SearchTopPage/DefaultSearchPage';
import dayjs from 'dayjs';
import useFetch from 'hooks/useFetch';
import get from 'lodash/get';
import type {
  ICommonDataSalon,
  ICommonLineList,
  ILocationList,
} from 'models/common/interface';
import commonQuery from 'models/common/query';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DateFormat } from 'utils/const';
import Helper from 'utils/helpers';

import { renderTabList } from './RenderTabList';

const SearchTopPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSymptomType, setSelectedSymptomType] = useState(1);
  const [selectedSymptom, setSelectedSymptom] = useState<number[]>([]);
  const [currentDate, setCurrentDate] = useState<Date | string>(
    dayjs(new Date()).format(DateFormat.YEAR_MONTH_DATE_DASH),
  );
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedStation, setSelectedStation] = useState<string[]>([]);
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [loadingShowModal, setLoadingShowModal] = useState(false);

  const handleSetActiveTab = (value: number) => setActiveTab(value);
  const handleSetSelectedSymptomType = (value: number) =>
    setSelectedSymptomType(value);
  const handleSetSelectedSymptom = (value: number[]) =>
    setSelectedSymptom(value);
  const handleSetSelectedLocation = (value: string[]) =>
    setSelectedLocation(value);
  const handleSetSelectedStation = (value: string[]) =>
    setSelectedStation(value);
  const handleOpenSearch = () => {
    setLoadingShowModal(true);
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };
  const handleCloseSearch = () => {
    setOpen(false);
    handleSetSelectedSymptomType(1);
    setCurrentDate(dayjs(new Date()).format(DateFormat.YEAR_MONTH_DATE_DASH));
  };

  const { data: response } = useFetch<ICommonDataSalon>(
    commonQuery.salonCommonData(),
  );
  const { data: locations } = useFetch<ILocationList>(
    commonQuery.locationList('1'),
  );
  const { data: lines } = useFetch<ICommonLineList>(
    commonQuery.stationLineList(),
  );
  const handleSubmit = () => {
    const data = {
      symptoms: selectedSymptom.join(),
      date: currentDate,
      areas: selectedLocation.join(),
      stations: selectedStation.join(),
      limit: 10,
      page: 1,
    };

    // Disable Button
    setDisabledSubmit(true);

    router.push(`${Helper.parseURLByParams(data, '/manipulator')}`);
  };

  const handleLoadedModal = () => setLoadingShowModal(false);

  return (
    <Box>
      {/* Default Search */}
      <Box sx={{ background: (theme: Theme) => theme.palette.orangeGradient }}>
        <DefaultSearch
          onOpenSearch={handleOpenSearch}
          onSetActiveTab={handleSetActiveTab}
        />
      </Box>

      {/* Advance Search - Filter */}
      <AdvanceSearch
        onOpenSearch={handleOpenSearch}
        onSetActiveTab={handleSetActiveTab}
        onSetSelectedSymptomType={handleSetSelectedSymptomType}
      />

      <LoadingOverlay visible={loadingShowModal} />

      {open && (
        <SearchModal
          open={open}
          tabs={renderTabList(
            selectedSymptomType,
            handleSetSelectedSymptomType,
            currentDate,
            setCurrentDate,
            get(locations, 'result', []),
            get(response, 'symptoms', []),
            get(lines, 'result', []),
            handleSetSelectedSymptom,
            handleSetSelectedLocation,
            handleSetSelectedStation,
          )}
          disabled={disabledSubmit}
          activeTab={activeTab}
          onClose={handleCloseSearch}
          onSubmit={handleSubmit}
          onLoaded={handleLoadedModal}
        />
      )}
    </Box>
  );
};

export default SearchTopPage;
