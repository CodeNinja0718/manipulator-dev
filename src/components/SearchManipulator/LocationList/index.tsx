import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import CheckboxList from 'components/CheckboxList';
import CheckboxBase from 'components/Form/CheckBox/CheckboxBase';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useMemo, useState } from 'react';

import type { LocationListProps, LocationProps } from './model';
import styles from './styles';

const LocationList = ({
  locations,
  onSetSelectedLocation,
  selectedDefaultLocations,
}: LocationListProps) => {
  const list: LocationProps[] = useMemo(() => {
    return locations || [];
  }, [locations]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setSelected([...selectedDefaultLocations]);
    onSetSelectedLocation([...selectedDefaultLocations]);
  }, [onSetSelectedLocation, selectedDefaultLocations]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    let currentSelected: string[] = [];
    if (selected.indexOf(value) > -1) {
      currentSelected = selected.filter((item: string) => item !== value);
    } else currentSelected = [...selected, value];
    setSelected(currentSelected);
    onSetSelectedLocation(currentSelected);
  };

  return isEmpty(list) ? (
    <></>
  ) : (
    <Box>
      <Typography color="grownText" sx={{ fontSize: '1.13rem', mb: 17 }}>
        東京
      </Typography>
      <CheckboxList
        leftComponent={<></>}
        rightComponent={
          <>
            {list.map((item) => (
              <FormControlLabel
                key={item._id}
                control={
                  <CheckboxBase
                    iconClassName="customCheckbox"
                    defaultChecked={selectedDefaultLocations.includes(
                      `${item._id}`,
                    )}
                  />
                }
                label={item.name}
                sx={styles.checkboxItem}
                labelPlacement="start"
                value={item._id}
                onChange={(event: any) => handleChange(event)}
              />
            ))}
          </>
        }
      />
    </Box>
  );
};

export default LocationList;
