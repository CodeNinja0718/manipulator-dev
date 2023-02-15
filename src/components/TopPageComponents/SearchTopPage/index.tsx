import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
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

import AdvanceSearch from './AdvanceSearch';
import DefaultSearch from './DefaultSearchPage';
import SearchModalElement from './SearchModalElement';

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

  const handleSetActiveTab = (value: number) => setActiveTab(value);
  const handleSetSelectedSymptomType = (value: number) =>
    setSelectedSymptomType(value);
  const handleSetSelectedSymptom = (value: number[]) =>
    setSelectedSymptom(value);
  const handleSetSelectedLocation = (value: string[]) =>
    setSelectedLocation(value);
  const handleSetSelectedStation = (value: string[]) =>
    setSelectedStation(value);
  const handleOpenSearch = () => setOpen(true);
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
      sort: 'createdDate.desc',
    };

    // Disable Button
    setDisabledSubmit(true);

    router.push(`${Helper.parseURLByParams(data, '/manipulator')}`);
  };

  return (
    <Box>
      <Box position="relative">
        {/* Default Search */}
        <Box
          sx={{ background: (theme: Theme) => theme.palette.orangeGradient }}
        >
          <DefaultSearch
            disabled={open}
            onOpenSearch={handleOpenSearch}
            onSetActiveTab={handleSetActiveTab}
          />
        </Box>

        {/* Advance Search - Filter */}
        <AdvanceSearch
          disabled={open}
          onOpenSearch={handleOpenSearch}
          onSetActiveTab={handleSetActiveTab}
          onSetSelectedSymptomType={handleSetSelectedSymptomType}
        />
      </Box>

      {open && (
        <SearchModalElement
          open={open}
          selectedSymptomType={selectedSymptomType}
          onSetSelectedSymptomType={handleSetSelectedSymptomType}
          currentDate={currentDate}
          onSetCurrentDate={setCurrentDate}
          locations={get(locations, 'result', [])}
          symptoms={get(response, 'symptoms', [])}
          lines={get(lines, 'result', [])}
          onSelectedSymptoms={handleSetSelectedSymptom}
          onSetSelectedLocation={handleSetSelectedLocation}
          onSetSelectedStation={handleSetSelectedStation}
          disabled={disabledSubmit}
          activeTab={activeTab}
          onClose={handleCloseSearch}
          onSubmit={handleSubmit}
        />
      )}
    </Box>
  );
};

export default SearchTopPage;