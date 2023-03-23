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
import { useFetch } from 'hooks';
import type { ICommonDataSalon, ILocationList } from 'models/common/interface';
import commonQuery from 'models/common/query';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

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
  const router = useRouter();
  const [areaCondition, setAreaCondition] = useState('');
  const [dateCondition, setDateCondition] = useState('');
  const [symptomsCondition, setSymptomsCondition] = useState('');
  useEffect(() => {
    const { date, areas, symptoms } = router.query;
    setDateCondition(date as string);
    setAreaCondition(areas as string);
    setSymptomsCondition(symptoms as string);
  }, [router]);

  const { data: response } = useFetch<ICommonDataSalon>(
    commonQuery.salonCommonData(),
  );
  const { data: locations } = useFetch<ILocationList>(
    commonQuery.locationList('1'),
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

  const dateSelected = useMemo(() => {
    return dateCondition ? <FormatDate dateString={dateCondition} /> : '';
  }, [dateCondition]);

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
          <ListItemButton sx={styles.listItemButton}>
            <ListItemText
              sx={styles.listItemText}
              primary={'エリア'}
              secondary={areaSelected ?? '渋谷/東京都/関東'}
            />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton}>
            <ListItemText
              sx={styles.listItemText}
              primary={'日付'}
              secondary={dateSelected ?? '指定なし'}
            />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton}>
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
            startIcon={<SvgIcon component={IconReloadSvg} inheritViewBox />}
          >
            条件を変更する
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchColumn;
