import type { AppBarProps as MuiAppBarProps } from '@mui/material';
import { AppBar } from '@mui/material';
import { gradientComponent } from 'hoc/GrandientComponent';
import type { ReactNode } from 'react';
import * as React from 'react';

interface AppBarProps extends MuiAppBarProps {
  children?: ReactNode;
  gradient?: string;
}

const SidebarDesktop = ({ children, gradient, ...props }: AppBarProps) => {
  return gradientComponent(
    <AppBar component="nav" {...props}>
      {children}
    </AppBar>,
    gradient,
  );
};

export default SidebarDesktop;
