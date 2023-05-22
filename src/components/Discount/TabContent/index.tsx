import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import type { ICoupon } from 'models/discount/interface';

import DiscountCard from '../Card';

interface TabContentProps {
  data: ICoupon[];
  isLoading: boolean;
}

const TabContent = ({ data, isLoading }: TabContentProps) => {
  const renderContent = (() => {
    if (isLoading) {
      return (
        <Stack height="100%" justifyContent="center" alignItems={'center'}>
          <CircularProgress />
        </Stack>
      );
    }

    return (
      <Stack spacing={30} px={{ xs: 0, md: 40 }} width={'100%'}>
        {data?.length ? (
          data.map((item) => <DiscountCard key={item.id} data={item} />)
        ) : (
          <Typography
            fontSize={24}
            variant="subtitle1"
            textAlign="center"
            color="gray"
            mb={30}
          >
            空のリスト
          </Typography>
        )}
      </Stack>
    );
  })();

  return (
    <Box width={'100%'} pb={10}>
      {renderContent}
    </Box>
  );
};

export default TabContent;
