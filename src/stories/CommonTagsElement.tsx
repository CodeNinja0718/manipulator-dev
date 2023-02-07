import './main.css';

import Box from '@mui/material/Box';
import CommonTags from 'components/CommonTags';
import React from 'react';

interface Tag {
  id: number;
  label: string;
  value: string | number;
}

export interface TagsElementProps {
  data: Tag[];
  actives?: number[];
}

export const CommonTagsElement = ({ data, actives = [] }: TagsElementProps) => {
  const list = data || [];
  const renderElement = () => {
    return list.map((item, index) => (
      <CommonTags
        key={item.id}
        index={index}
        label={item.label}
        active={actives.includes(index)}
      />
    ));
  };

  return (
    <Box display="flex" gap={10}>
      {renderElement()}
    </Box>
  );
};
