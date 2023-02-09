import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import CheckboxList from 'components/CheckboxList';
import CheckboxBase from 'components/Form/CheckBox/CheckboxBase';
import React, { useMemo, useState } from 'react';

import styles from './styles';

interface LocationListProps {
  locations: {
    _id: number;
    name: string;
    provinceId: number;
    provinceName: string;
  }[];
  onSetSelectedLocation: (value: string[]) => void;
}

const LocationList = ({
  locations,
  onSetSelectedLocation,
}: LocationListProps) => {
  const list: {
    _id: number;
    name: string;
    provinceId: number;
    provinceName: string;
  }[] = useMemo(() => {
    return locations || [];
  }, [locations]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    let currentSelected: string[] = [];
    if (selected.indexOf(value) > -1) {
      currentSelected = selected.filter((item: string) => item !== value);
    } else currentSelected = [...selected, value];
    setSelected(currentSelected);
    onSetSelectedLocation(currentSelected);
  };

  return (
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
                control={<CheckboxBase iconClassName="customCheckbox" />}
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
