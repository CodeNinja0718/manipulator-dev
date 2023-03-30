import ListSvg from '@icons/icon_list.svg';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import CommonTags from 'components/CommonTags';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useMemo, useState } from 'react';

interface CommonTagsProps {
  symptoms: {
    _id: number;
    symptomName: string;
    typeId: number;
    typeName: string;
  }[];
  selectedSymptomType: number;
  onSelectedSymptoms: (value: number[]) => void;
}

const SymptomListByType = ({
  symptoms,
  selectedSymptomType,
  onSelectedSymptoms,
}: CommonTagsProps) => {
  const [actives, setActives] = useState<number[]>([]);
  const list = useMemo(() => {
    const newValue = symptoms || [];

    return newValue.filter((item) => item.typeId === selectedSymptomType);
  }, [symptoms, selectedSymptomType]);

  useEffect(() => {
    // Clear selected tag when changed symptom type
    setActives([]);
    onSelectedSymptoms([]);
  }, [symptoms, selectedSymptomType]);

  const handleClickTag = (value: number) => {
    let selected: number[] = [];
    if (actives.indexOf(value) > -1) {
      selected = actives.filter((item) => item !== value);
    } else selected = [...actives, value];

    setActives(selected);

    // Handle selected tags
    const selectedValue = list
      .filter((_item, index) => selected.includes(index))
      .map((item) => item._id);
    onSelectedSymptoms(selectedValue);
  };

  return isEmpty(list) ? (
    <></>
  ) : (
    <Box pl={{ xs: 0, tablet: 10 }}>
      <Box display="flex" alignItems="center">
        <Box width={20} height={18} color="orangeBold" mr={12}>
          <SvgIcon
            component={ListSvg}
            sx={{
              width: 'inherit',
              height: 'inherit',
            }}
            inheritViewBox
          />
        </Box>
        <Typography color="orangeBold" sx={{ fontSize: '1.13rem' }}>
          自律神経の症状一覧
        </Typography>
      </Box>
      <Box height={{ tablet: 200 }} overflow="auto">
        <Box display="flex" rowGap={10} mt={20} columnGap={6}>
          <Box display="inherit" gap="inherit" flexWrap="wrap">
            {list.map((item, index) => (
              <CommonTags
                key={item._id}
                index={index}
                label={item.symptomName}
                active={actives.includes(index)}
                onClick={handleClickTag}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SymptomListByType;
