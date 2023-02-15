import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const TitleElement = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          display: { xs: 'block', tablet: 'none' },
        }}
      >
        <Image
          src="/images/illust_search_title.webp"
          alt="illust_search_title"
          width={49}
          height={51}
        />
      </Box>
      <Typography variant="title" mt={8}>
        整体師検索
      </Typography>
    </Box>
  );
};
export default TitleElement;
