import LocationIcon from '@icons/arrow.svg';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import CheckboxList from 'components/CheckboxList';
import CheckboxBase from 'components/Form/CheckBox/CheckboxBase';
import useFetch from 'hooks/useFetch';
import get from 'lodash/get';
import type { ICommonStation } from 'models/common/interface';
import commonQuery from 'models/common/query';
import React, { useEffect, useMemo, useState } from 'react';

import type { LinesProps, StationListProps } from './model';
import styles from './styles';

const StationList = ({
  lines,
  onSetSelectedStation,
  selectedDefaultStations,
  setSelectedLine,
  selectedLine,
}: StationListProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelectedLine = (value: number) => {
    setSelectedLine(value);
  };
  const { data: stations } = useFetch<ICommonStation>(
    commonQuery.stationListByLine(selectedLine),
  );

  useEffect(() => {
    if (selectedDefaultStations.length > 0) {
      setSelected([...selectedDefaultStations]);
    }
  }, [selectedDefaultStations]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    let currentSelected: string[] = [];
    if (selected.indexOf(value) > -1) {
      currentSelected = selected.filter((item: string) => item !== value);
    } else currentSelected = [...selected, value];
    setSelected(currentSelected);

    // Handle selected current station
    onSetSelectedStation(currentSelected);
  };

  const handleBackLineList = () => {
    handleSelectedLine(0);
  };

  const line: LinesProps[] = useMemo(() => {
    return lines || [];
  }, [lines]);

  const stationsList: LinesProps[] = useMemo(() => {
    const value = stations || [];
    return get(value, 'result', []);
  }, [stations]);

  const list = selectedLine ? stationsList : line;

  const isCheckboxChecked = (item: LinesProps) =>
    selected.indexOf(item._id.toString()) !== -1;

  return (
    <Box>
      <Typography color="grownText" sx={{ fontSize: '1.13rem', mb: 17 }}>
        東京
      </Typography>
      <CheckboxList
        leftComponent={
          <>
            {selectedLine ? (
              <SvgIcon
                component={LocationIcon}
                viewBox="0 0 14 30"
                sx={styles.backButton}
                onClick={handleBackLineList}
              />
            ) : (
              <></>
            )}
          </>
        }
        rightComponent={
          <>
            {typeof stations === 'undefined' ? (
              <Box sx={styles.loadingBox}>
                <CircularProgress size="small" sx={styles.loading} />
              </Box>
            ) : (
              list.map((item) => (
                <FormControlLabel
                  key={item._id}
                  control={
                    selectedLine ? (
                      <CheckboxBase
                        iconClassName="customCheckbox"
                        checked={isCheckboxChecked(item)}
                        defaultChecked={selectedDefaultStations.includes(
                          `${item.groupId}`,
                        )}
                      />
                    ) : (
                      <Typography />
                    )
                  }
                  label={item.name}
                  sx={styles.checkboxItem}
                  labelPlacement="start"
                  value={item._id}
                  onClick={() => !selectedLine && handleSelectedLine(item._id)}
                  onChange={(event: any) => selectedLine && handleChange(event)}
                />
              ))
            )}
          </>
        }
      />
    </Box>
  );
};

export default StationList;
