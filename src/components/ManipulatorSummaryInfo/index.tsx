import { Box } from '@mui/material';
import Image from 'next/image';

import type { IManipulatorSummaryInfo } from './model';

const ManipulatorSummaryInfo = ({
  name,
  salonName,
  access,
  reviewRating,
  photos,
}: IManipulatorSummaryInfo) => {
  const accessList = access || [];
  const photosList = photos || [];

  return (
    <Box display="flex" gap={20}>
      <Box>
        {photosList.map((item, index) => (
          <Image
            key={`photo-${index}`}
            src={`${item.url}`}
            alt="image-title"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            height={80}
            width={80}
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
              objectPosition: 'top center',
              borderRadius: '50%',
            }}
          />
        ))}
      </Box>
      <Box>
        <Box>{name}</Box>
        <Box>{salonName}</Box>
        <Box>
          {accessList.map((item, index) => (
            <Box key={index}>{item}</Box>
          ))}
        </Box>
        <Box>
          {reviewRating?.total}
          {reviewRating?.averageRating}
        </Box>
      </Box>
    </Box>
  );
};
export default ManipulatorSummaryInfo;
