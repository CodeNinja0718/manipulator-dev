import LocationIcon from '@icons/arrow.svg';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import CheckboxList from 'components/CheckboxList';
import CheckboxBase from 'components/Form/CheckBox/CheckboxBase';
import useDetail from 'hooks/useDetail';
import get from 'lodash/get';
import type { ICommonStation } from 'models/common/interface';
import commonQuery from 'models/common/query';
import React, { useMemo, useState } from 'react';

import styles from './styles';

interface StationListProps {
  lines: {
    _id: number;
    name: string;
  }[];
  onSetSelectedStation: (value: string[]) => void;
}

const StationList = ({ lines, onSetSelectedStation }: StationListProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedLine, setSelectedLine] = useState<number>(0);
  const handleSelectedLine = (value: number) => {
    setSelectedLine(value);
  };
  const { data: stations } = useDetail<ICommonStation>(
    commonQuery.stationListByLine(selectedLine),
  );
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
    setSelected([]);
  };

  const line: {
    _id: number;
    name: string;
  }[] = useMemo(() => {
    return lines || [];
  }, [lines]);

  const stationsList: {
    _id: number;
    name: string;
  }[] = useMemo(() => {
    const value = stations || [];
    return get(value, 'result', []);
  }, [stations]);

  const list = selectedLine ? stationsList : line;

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
                sx={{
                  width: 5,
                  transform: 'rotateY(180deg)',
                  mt: 7,
                  ml: 17,
                  cursor: 'pointer',
                }}
                onClick={handleBackLineList}
              />
            ) : (
              <></>
            )}
          </>
        }
        rightComponent={
          <>
            {list.map((item) => (
              <FormControlLabel
                key={item._id}
                control={
                  selectedLine ? (
                    <CheckboxBase iconClassName="customCheckbox" />
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
            ))}
          </>
        }
      />
    </Box>
  );
};

export default StationList;
