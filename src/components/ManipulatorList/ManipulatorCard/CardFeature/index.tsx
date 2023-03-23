import { Box } from '@mui/material';
import type { IManipulator } from 'models/manipulator/interface';
import Image from 'next/image';
import * as React from 'react';
import Helper from 'utils/helpers';

interface ManipulatorCardFeatureProps {
  data: IManipulator;
}
const ManipulatorCardFeature = ({ data }: ManipulatorCardFeatureProps) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={{ xs: '4px', tablet: '5px' }}
      margin="20px 0px"
    >
      {data.salon?.[0]?.features.map((item, index) => (
        <Image
          key={`feat-${index}`}
          src={Helper.getFeatueImage(item.id)}
          alt="feat-image"
          sizes="(max-width: 120px) 100vw, 80px"
          height={55}
          priority
          width={80}
        />
      ))}
    </Box>
  );
};

export default ManipulatorCardFeature;
