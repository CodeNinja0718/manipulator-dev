import { Avatar, Box, Typography } from '@mui/material';
import * as React from 'react';
import { RESERVATION_STATUS_VALUE } from 'utils/const';
import Helper from 'utils/helpers';

import type { ReservationCardModel } from '../model';
import styles from '../styles';

interface ReservationItemHeaderProps {
  data: ReservationCardModel;
}
const ReservationItemHeader = ({ data }: ReservationItemHeaderProps) => {
  return (
    <Box sx={styles.reservationHeader}>
      <Box
        sx={styles.reservationHeaderAbove}
        bgcolor={
          data.status === RESERVATION_STATUS_VALUE.confirmed
            ? 'orange.main'
            : '#999999'
        }
      >
        <Typography component="h3" fontWeight={'600'}>
          {`${data.position} / ${data.salonName}`}
        </Typography>
      </Box>
      <Box
        sx={styles.reservationHeaderBellow}
        color={
          data.status === RESERVATION_STATUS_VALUE.confirmed
            ? 'orange.main'
            : ''
        }
        fontWeight={'600'}
      >
        {Helper.convertStatus(data.status)}
      </Box>
      <Avatar
        alt={data.position}
        src={data.avatar}
        sx={styles.reservationAvatar}
      />
    </Box>
  );
};

export default ReservationItemHeader;
