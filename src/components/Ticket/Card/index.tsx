import ArrowRight from '@icons/arrow-right.svg';
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material';
import FormatDate from 'components/FormatDate';
import { NumberInput } from 'components/NumberInput';
import type { ITicketItem } from 'models/ticket/interface';
import { useMemo, useState } from 'react';
import Helper from 'utils/helpers';

import styles from './styles';

interface TicketCardProps {
  data: ITicketItem;
}
const TicketCard = ({ data }: TicketCardProps) => {
  const [timesUse, setTimesUse] = useState(1);
  const isEpxWarning = useMemo(() => {
    return Helper.checkExpTicketWarning(data.expiredAt);
  }, [data.expiredAt]);

  const avatar = useMemo(() => {
    return (
      data.manipulatorInfo.photos?.find((item) => item.type === 'avatar')
        ?.url || '/icons/default-avatar.svg'
    );
  }, [data]);

  return (
    <Box sx={styles.ticketWrapper}>
      <Box sx={styles.header}>
        <Box sx={styles.headerAbove} bgcolor="orange.main">
          <Typography
            sx={styles.text}
            color={'white'}
            noWrap={true}
            title={data.salonName}
          >
            {data.salonName}
          </Typography>
        </Box>
        <Box
          sx={{
            ...styles.headerBellow,
            backgroundColor: isEpxWarning ? '#fff197' : '#ffffff',
          }}
        >
          <Stack spacing={10} direction={'row'}>
            <Typography fontSize={16}>
              有効期限：
              <FormatDate
                dateString={data.expiredAt}
                formatValue="yyyy/MM/dd"
              />
            </Typography>
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
              alt={data.manipulatorInfo.manipulatorName}
              src={avatar}
              sx={styles.avatar}
            />
            <Typography sx={styles.text}>
              {data.manipulatorInfo.manipulatorName}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} tablet={7}>
          <Typography sx={styles.text} mb={10}>
            {data.ticketName}
          </Typography>
          <Stack direction={'row'} spacing={10} alignItems={'center'}>
            <Box sx={styles.timesLeft}>
              <Typography sx={styles.timesLeftText}>
                残り
                <Typography component={'span'} sx={styles.timesLeftNumber}>
                  {data.availableCount}
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
              max={data.availableCount}
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
        href={`/booking/${data.manipulatorInfo.manipulatorId}/slot?ticketId=${data.ticketId}&ticketUse=${timesUse}`}
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
