import './main.css';

import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React from 'react';

// Only include variant, size, and color
type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'color' | 'disabled' | 'endIcon' | 'startIcon' | 'sx'
>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonElementProps extends ButtonBaseProps {
  label: string;
}

export const ButtonElement = ({ label, ...rest }: ButtonElementProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);
