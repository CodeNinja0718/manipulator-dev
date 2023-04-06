import ArrowRight from '@icons/arrow-right.svg';
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material';
import { NumberInput } from 'components/NumberInput';
import { useMemo, useState } from 'react';
import Helper from 'utils/helpers';

import styles from './styles';

interface TicketCardProps {
  data: any;
}
const TicketCard = ({ data }: TicketCardProps) => {
  const [timesUse, setTimesUse] = useState(1);
  const expDay = '2023-05-05';
  const isEpxWarning = useMemo(() => {
    return Helper.checkExpTicketWarning(expDay);
  }, [expDay]);

  return (
    <Box sx={styles.ticketWrapper}>
      <Box sx={styles.header}>
        <Box sx={styles.headerAbove} bgcolor="orange.main">
          <Typography sx={styles.text} color={'white'} noWrap={true} title={''}>
            快適整体院
          </Typography>
        </Box>
        <Box
          sx={{
            ...styles.headerBellow,
            backgroundColor: isEpxWarning ? '#fff197' : '#ffffff',
          }}
        >
          <Stack spacing={10} direction={'row'}>
            <Typography fontSize={16}>有効期限：2022/12/31</Typography>
            {isEpxWarning && (
              <Typography sx={styles.expText}>有効期限間近</Typography>
            )}
          </Stack>
        </Box>
      </Box>
      <Grid container spacing={10} sx={styles.contentWrapper}>
        <Grid item xs={12} tablet={5}>
          <Stack direction={'row'} spacing={12} alignItems={'center'}>
            <Avatar
              alt={data?.name || ''}
              src={data?.avatar || ''}
              sx={styles.avatar}
            />
            <Typography sx={styles.text}>整体師太郎</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} tablet={7}>
          <Typography sx={styles.text} mb={10}>
            整体10回コース （目安時間：30分）
          </Typography>
          <Stack direction={'row'} spacing={10} alignItems={'center'}>
            <Box sx={styles.timesLeft}>
              <Typography sx={styles.timesLeftText}>
                残り
                <Typography component={'span'} sx={styles.timesLeftNumber}>
                  10
                </Typography>
                回
              </Typography>
            </Box>
            <Typography sx={styles.text} pl={5}>
              使用する
            </Typography>
            <NumberInput
              sx={styles.numberInput}
              onChange={(e: number | undefined) => {
                if (typeof e === 'number') {
                  setTimesUse(e);
                }
              }}
              value={timesUse}
              min={1}
            />
            <Typography sx={styles.text}>回</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        endIcon={<ArrowRight />}
        sx={styles.btn}
        disabled={timesUse < 1}
        href={`/booking/maniId?menuId=&ticket=${timesUse}`}
      >
        回数券を使って予約する
      </Button>
      {/* <Button variant="text" sx={styles.btnText}>
        整体師を変更して予約する
      </Button> */}
    </Box>
  );
};

export default TicketCard;
