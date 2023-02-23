import IconStar from '@icons/star.svg';
import IconStarEmpt from '@icons/star_empty.svg';
import IconStarHalf from '@icons/star_half.svg';
import { Box, Stack } from '@mui/material';
import * as React from 'react';

interface StarsProps {
  star: number;
}
const Stars = ({ star }: StarsProps) => {
  const starHalf = Number.isInteger(star) ? 0 : Math.ceil(5 - star);
  const starEmpt = Number.isInteger(star) ? 5 - star : 0;
  const starRender = Math.floor(star);
  return (
    <Box display={'flex'} alignItems="center" marginTop={'2px'}>
      <Stack direction={'row'} display={'inline-flex'}>
        {[...Array(starRender)].map((e, i) => (
          <IconStar width="16px" height="16px" key={`star-${i.toString()}`} />
        ))}
        {starHalf > 0 &&
          [...Array(starHalf)].map((e, i) => (
            <IconStarHalf
              width="16px"
              height="16px"
              key={`starHalf-${i.toString()}`}
            />
          ))}
        {starEmpt > 0 &&
          [...Array(starEmpt)].map((e, i) => (
            <IconStarEmpt
              width="16px"
              height="16px"
              key={`starEmpt-${i.toString()}`}
            />
          ))}
      </Stack>
      <Box
        component={'span'}
        display="inline-block"
        marginLeft={6}
        fontWeight={'bold'}
        color={'orangeBold'}
      >
        {star}
      </Box>
    </Box>
  );
};

export default Stars;
