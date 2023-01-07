import './main.css';

import type { AppBarProps as MuiAppBarProps } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

import SidebarDesktop from '../components/Layout/Header/SidebarDesktop';

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
    <SidebarDesktop {...rest} gradient={gradient}>
      {children}
    </SidebarDesktop>
  );
};
