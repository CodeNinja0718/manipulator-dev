import { Box, Stack, Typography } from '@mui/material';

import styles from './styles';

// interface DiscountCardProps {
//   data: any;
// }
const DiscountCard = () => {
  return (
    <Box sx={styles.ticketWrapper}>
      <Box sx={styles.header}>
        <Box sx={styles.headerAbove} bgcolor="orange.main">
          <Typography sx={styles.text} color={'white'} noWrap={true} title={''}>
            期間限定 1,000円クーポン
          </Typography>
        </Box>
        <Box sx={styles.headerBellow}>
          <Stack spacing={10} direction={'row'}>
            <Typography fontSize={14}>有効期限：2022/12/31</Typography>
          </Stack>
        </Box>
      </Box>
      <Stack spacing={6} sx={styles.contentWrapper}>
        <Typography sx={styles.title}>支払額から1,000円OFF</Typography>
        <Typography fontSize={14}>
          ※6,000円以上のメニューにご利用いただけます。
        </Typography>
        <Typography fontSize={14}>
          ※お一人様、一回限り有効となります。
        </Typography>
      </Stack>
    </Box>
  );
};

export default DiscountCard;
