import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

import styles from './styles';

interface LabelProps {
  label: string;
  required?: boolean;
  extraLabel?: string | ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  htmlFor?: string;
}

const labelStyle = {
  large: {
    fontSize: 18,
    fontWeight: 'bold',
    mb: 8,
  },
  medium: {
    fontSize: 16,
    mb: 8,
    fontWeight: 'bold',
  },
  small: {},
  center: {},
};

const Label = ({
  label,
  required,
  size = 'medium',
  className,
  htmlFor,
}: LabelProps) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center" flex={1}>
        <Typography
          component="label"
          color="heading"
          sx={labelStyle[size]}
          className={className}
          htmlFor={htmlFor}
        >
          {label}
          {required && (
            <Typography component="span" sx={styles.required}>
              必須
            </Typography>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Label;
