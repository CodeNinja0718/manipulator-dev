import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

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

const requiredStyle = {
  large: {
    fontSize: 16,
  },
  medium: {
    fontSize: 12,
  },
  small: {},
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
            <Typography
              component="span"
              sx={requiredStyle[size]}
              color="primary"
            >
              （必須）
            </Typography>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Label;
