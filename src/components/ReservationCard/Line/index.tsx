import type { SxProps, Theme } from '@mui/material';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import FormatDate from 'components/FormatDate';
import * as React from 'react';

import styles from '../styles';

interface ReservationItemLineTextProps {
  label: string;
  value: string | React.ReactNode;
  isDate?: boolean;
  sxText?: SxProps<Theme> | undefined;
}
const ReservationItemLineText = ({
  label,
  value,
  isDate,
  sxText,
}: ReservationItemLineTextProps) => {
  const isDateText = isDate && typeof value === 'string';
  const isText = !isDate && typeof value === 'string';
  const isElement = typeof value !== 'string';

  return (
    <Grid
      container
      spacing={2}
      sx={styles.reservationLine}
      alignItems={'center'}
    >
      <Grid item xs={8}>
        <Box>
          <Typography component="label" fontWeight={'600'}>
            {label}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4} textAlign={'right'} sx={sxText}>
        {isText ? <Typography component="p">{value}</Typography> : ''}
        {isDateText ? <FormatDate dateString={value} /> : ''}
        {isElement ? value : ''}
      </Grid>
    </Grid>
  );
};

export default ReservationItemLineText;
