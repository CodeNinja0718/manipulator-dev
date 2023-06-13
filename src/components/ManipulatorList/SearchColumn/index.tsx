import IconReloadSvg from '@icons/icon_sync.svg';
import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Typography,
} from '@mui/material';
import FormatDate from 'components/FormatDate';
import SearchModalElement from 'components/TopPageComponents/SearchTopPage/SearchModalElement';
import { useFetch } from 'hooks';
import { get } from 'lodash';
import type {
  ICommonDataSalon,
  ICommonLineList,
  ILocationList,
} from 'models/common/interface';
import commonQuery from 'models/common/query';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { SearchTopPageType } from 'utils/const';
import Helper from 'utils/helpers';

import styles from './styles';

export interface SearchColumnItem {
  href: string;
  label: string;
  // icon: React.ReactNode;
  icon: any;
  viewBox?: string;
  children?: SearchColumnItem[];
}

const SearchColumn = () => {
  // get query params.
  const router = useRouter();

  const {
    date: defaultDate,
    areas: defaultAreas,
    symptoms: defaultSymptoms,
    stationGroups: defaultStationGroups,
    line: defaultLine,
  } = router.query;

  const [areaCondition, setAreaCondition] = useState('');
  const [dateCondition, setDateCondition] = useState('');
  const [symptomsCondition, setSymptomsCondition] = useState('');

  // modal state
  const [open, setOpen] = useState(false);

  // state for search modal.
  const [activeTab, setActiveTab] = useState(SearchTopPageType.LOCATION);
  const [selectedSymptomType, setSelectedSymptomType] = useState(1);
  const [selectedSymptom, setSelectedSymptom] = useState<number[]>([]);
  const [currentDate, setCurrentDate] = useState<Date | string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedStation, setSelectedStation] = useState<string[]>([]);
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [selectedLine, setSelectedLine] = useState<number>(0);

  const [selectedDefaultLocations, setSelectedDefaultLocations] = useState<
    string[]
  >([]);
  const [selectedDefaultSymptoms, setSelectedDefaultSymptoms] = useState<
    number[]
  >([]);
  const [selectedDefaultStations, setSelectedDefaultStations] = useState<
    string[]
  >([]);

  useEffect(() => {
    setDateCondition(defaultDate as string);
    setAreaCondition(defaultAreas as string);
    setSymptomsCondition(defaultSymptoms as string);
  }, [defaultDate, defaultAreas, defaultSymptoms]);

  const dateSelected = useMemo(() => {
    return dateCondition ? <FormatDate dateString={dateCondition} /> : '';
  }, [dateCondition]);

  const handleOpenSearch = React.useCallback(() => {
    setOpen(true);
    setDisabledSubmit(false);
  }, []);

  const handleSetSelectedSymptomType = (value: number) =>
    setSelectedSymptomType(value);

  const handleSetSelectedSymptom = (value: number[]) =>
    setSelectedSymptom(value);

  const handleSetSelectedLocation = (value: string[]) =>
    setSelectedLocation(value);

  const handleSetSelectedStation = (value: string[]) =>
    setSelectedStation(value);

  const handleCloseSearch = () => {
    setOpen(false);
    handleSetSelectedSymptomType(1);
    setCurrentDate(null);
  };

  const handleChangeTab = (value: number) => {
    if (value === SearchTopPageType.LOCATION) {
      setSelectedStation([]);
    } else {
      setSelectedLocation([]);
    }
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

  const symptomsSelected = useMemo(() => {
    return response?.symptoms.find(
      (item) => item._id.toString() === symptomsCondition,
    )?.symptomName;
  }, [response, symptomsCondition]);

  const areaSelected = useMemo(() => {
    return locations?.result.find(
      (item) => item._id.toString() === areaCondition,
    )?.name;
  }, [locations, areaCondition]);

  const handleSubmit = (isSkipCondition?: boolean) => {
    const data: any = {
      symptoms: selectedSymptom.join(),
      date: currentDate,
      areas: selectedLocation.join(),
      stationGroups: selectedStation.join(),
      limit: 10,
      page: 1,
      sort: 'createdDate.desc',
    };

    if (selectedStation.length > 0) {
      data.line = selectedLine;
    }

    if (
      !data.symptoms &&
      !data.areas &&
      !data.stationGroups &&
      !isSkipCondition
    ) {
      Helper.toast('検索するためにエリア/駅または症状を選択してください。', {
        type: 'error',
      });
      return;
    }

    // Disable Button
    setDisabledSubmit(true);
    setOpen(false);
    router.push(`${Helper.parseURLByParams(data, '/manipulator')}`);
  };

  useEffect(() => {
    if (defaultAreas || defaultSymptoms || defaultStationGroups) {
      if (defaultAreas) {
        const DefaultAreas = (defaultAreas as string).split(',');

        setSelectedDefaultLocations(DefaultAreas);
        setSelectedLocation(DefaultAreas);
        setActiveTab(SearchTopPageType.LOCATION);
      } else {
        setSelectedDefaultLocations([]);
        setSelectedLocation([]);
      }

      if (defaultSymptoms) {
        const DefaultSymptoms: number[] = (defaultSymptoms as string)
          .split(',')
          .map((item) => Number(item));
        setSelectedDefaultSymptoms(DefaultSymptoms);
        setSelectedSymptom(DefaultSymptoms);
      } else {
        setSelectedDefaultSymptoms([]);
        setSelectedSymptom([]);
      }

      if (defaultStationGroups) {
        const DefaultStationGroups: string[] = (
          defaultStationGroups as string
        ).split(',');
        setSelectedDefaultStations(DefaultStationGroups);
        setSelectedStation(DefaultStationGroups);
        setActiveTab(SearchTopPageType.STATION);
        setSelectedLine(Number(defaultLine));
      } else {
        setSelectedDefaultStations([]);
        setSelectedStation([]);
      }
    }

    if (defaultDate && !Array.isArray(defaultDate)) {
      setCurrentDate(defaultDate);
    }
  }, [
    defaultAreas,
    defaultDate,
    defaultStationGroups,
    defaultSymptoms,
    defaultLine,
  ]);

  return (
    <Box sx={styles.searchColumn}>
      <Box sx={styles.searchColumnBox}>
        <Box sx={styles.searchColumnTitleBox}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">検索結果</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box display={{ xs: 'block', tablet: 'none' }} textAlign="center">
                <Button
                  size="small"
                  variant="contained"
                  sx={styles.button}
                  onClick={handleOpenSearch}
                  startIcon={
                    <SvgIcon component={IconReloadSvg} inheritViewBox />
                  }
                >
                  条件を変更する
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <List component="nav" aria-label="side-menu" sx={styles.listItem}>
          <ListItemButton sx={styles.listItemButton} disabled>
            <ListItemText
              sx={styles.listItemText}
              primary={'エリア'}
              secondary={areaSelected ?? '渋谷/東京都/関東'}
            />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton} disabled>
            <ListItemText
              sx={styles.listItemText}
              primary={'日付'}
              secondary={dateSelected || '指定なし'}
            />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton} disabled>
            <ListItemText
              sx={styles.listItemText}
              primary={'症状'}
              secondary={symptomsSelected ?? '指定なし'}
            />
          </ListItemButton>
        </List>

        <Box
          display={{ xs: 'none', tablet: 'block' }}
          textAlign="center"
          marginTop="30"
        >
          <Button
            size="small"
            variant="contained"
            sx={styles.button}
            onClick={handleOpenSearch}
            startIcon={<SvgIcon component={IconReloadSvg} inheritViewBox />}
          >
            条件を変更する
          </Button>
        </Box>
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
          onSubmit={() => handleSubmit()}
          onChangeTab={handleChangeTab}
          selectedDefaultLocations={selectedDefaultLocations}
          selectedDefaultStations={selectedDefaultStations}
          selectedDefaultSymptoms={selectedDefaultSymptoms}
          setSelectedDefaultSymptoms={setSelectedDefaultSymptoms}
          selectedLine={selectedLine}
          setSelectedLine={setSelectedLine}
        />
      )}
    </Box>
  );
};

export default SearchColumn;
