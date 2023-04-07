import { Box, Stack } from '@mui/material';

import DiscountCard from '../Card';

// interface TabContentProps {
//   data: any;
// }
const TabContent = () => {
  return (
    <Box width={'100%'} pb={10}>
      {/* {isLoading && (
        <Stack height="100%" justifyContent="center">
          <CircularProgress />
        </Stack>
      )} */}
      <Stack spacing={30} px={{ xs: 0, md: 40 }} width={'100%'}>
        {/* {list.map((item) => (
          <DiscountCard key={item._id} data={item} />
        ))} */}

        <DiscountCard />
        <DiscountCard />
        <DiscountCard />
        <DiscountCard />
      </Stack>
    </Box>
  );
};

export default TabContent;
