import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CommonTags from 'components/CommonTags';
import React, { useEffect, useState } from 'react';

const TAGS = [
  { id: 1, label: '慢性疲労症候群', value: 1 },
  { id: 2, label: '産後うつ', value: 2 },
  { id: 3, label: '冷え', value: 3 },
  { id: 4, label: '更年期障害', value: 4 },
  { id: 5, label: '過敏性腸症候群', value: 5 },
  { id: 6, label: 'PMS(月経前症候群)', value: 6 },
  { id: 7, label: '逆流性食道炎', value: 7 },
  { id: 8, label: '自律神経失調症', value: 8 },
  { id: 9, label: '頚椎症', value: 9 },
  { id: 10, label: 'めまい', value: 10 },
  { id: 11, label: '寝違い', value: 11 },
  { id: 12, label: '頭痛', value: 12 },
  { id: 13, label: '顎関節症', value: 13 },
  { id: 14, label: '起立性調整障害', value: 14 },
];

interface CommonTagsProps {
  id: number;
  label: string;
  active?: boolean;
}

const SymptomItem = () => {
  const [list, setList] = useState<CommonTagsProps[]>([]);
  const [actives, setActives] = useState<number[]>([]);

  useEffect(() => {
    return setList(TAGS);
  }, []);

  const handleClickTag = (value: number) => {
    let selected: number[] = [];
    if (actives.indexOf(value) > -1) {
      selected = actives.filter((item) => item !== value);
    } else selected = [...actives, value];
    setActives(selected);
  };

  return (
    <Box pl={{ xs: 0, tablet: 10 }}>
      <Typography color="orangeBold" sx={{ fontSize: '1.13rem' }}>
        自律神経の症状一覧
      </Typography>
      <Box display="flex" rowGap={10} columnGap={6}>
        <Box display="inherit" gap="inherit" mt={20} flexWrap="wrap">
          {list.map((item, index) => (
            <CommonTags
              key={item.id}
              index={index}
              label={item.label}
              active={actives.includes(index)}
              onClick={handleClickTag}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SymptomItem;
