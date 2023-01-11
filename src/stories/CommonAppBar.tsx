import './main.css';

import type { AppBarProps as MuiAppBarProps } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

import DesktopNavbar from '../components/Layout/Navbar/DesktopNavbar';

// Only include variant, size, and color
type MuiAppBarBaseProps = Pick<MuiAppBarProps, 'color' | 'position' | 'sx'>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface AppBarProps extends MuiAppBarBaseProps {
  children?: ReactNode;
  gradient?: string;
}

export const AppBar = ({ children, gradient, ...rest }: AppBarProps) => {
  return (
    <DesktopNavbar {...rest} gradient={gradient}>
      {children}
    </DesktopNavbar>
  );
};
