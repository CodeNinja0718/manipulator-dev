import { Box, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import type { ICoupon } from 'models/discount/interface';
import { DateFormat } from 'utils/const';

import styles from './styles';

interface DiscountCardProps {
  data: ICoupon;
}

const DiscountCard = ({ data }: DiscountCardProps) => {
  const expiredDate = data.expiredAt
    ? dayjs(data.expiredAt).format(DateFormat.YEAR_MONTH_DATE)
    : null;

  return (
    <Box sx={styles.ticketWrapper}>
      <Box sx={styles.header}>
        <Box sx={styles.headerAbove} bgcolor="orange.main">
          <Typography sx={styles.text} color={'white'} noWrap={true} title={''}>
            {`期間限定 ${data.amount}円クーポン`}
          </Typography>
        </Box>
        {expiredDate && (
          <Box sx={styles.headerBellow}>
            <Stack spacing={10} direction={'row'}>
              <Typography fontSize={14}>
                {`有効期限：${expiredDate}`}
              </Typography>
            </Stack>
          </Box>
        )}
      </Box>
      <Stack spacing={6} sx={styles.contentWrapper}>
        <Typography
          sx={styles.title}
        >{`支払額から${data.amount}円OFF`}</Typography>
        {/* <Typography fontSize={14}>
          {`※${data.amount}円以上のメニューにご利用いただけます。`}
        </Typography>
        <Typography fontSize={14}>
          ※お一人様、一回限り有効となります。
        </Typography> */}
        <Typography fontSize={14}>{data.description}</Typography>
      </Stack>
    </Box>
  );
};

export default DiscountCard;
