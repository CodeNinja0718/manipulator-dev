import './main.css';

import type { TypographyProps as MuiTypographyProps } from '@mui/material';
import { Typography as MuiTypography } from '@mui/material';
import React from 'react';

// Use all except disableRipple
type TypographyBaseProps = Pick<MuiTypographyProps, 'sx' | 'align'>;

export interface TypographyProps extends TypographyBaseProps {
  label: string;
}

export const Typography = ({ label, ...rest }: TypographyProps) => (
  <MuiTypography {...rest}>{label}</MuiTypography>
);
