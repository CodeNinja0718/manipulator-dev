import { Box, Typography } from '@mui/material';
import * as React from 'react';

import styles from '../styles';

interface ReservationItemIconTextProps {
  label: string;
  icon?: React.ReactNode;
  bgColor: string;
}
const ReservationItemIconText = ({
  label,
  icon,
  bgColor,
}: ReservationItemIconTextProps) => {
  return (
    <Box sx={styles.buttonIconText}>
      <Box component={'div'} sx={styles.buttonIcon} bgcolor={bgColor}>
        {icon}
      </Box>
      <Box component={'div'} sx={styles.buttonText}>
        <Typography component="p" fontWeight={400}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReservationItemIconText;
