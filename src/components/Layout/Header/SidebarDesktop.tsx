import type { AppBarProps as MuiAppBarProps } from '@mui/material';
import { AppBar } from '@mui/material';
import type { ReactNode } from 'react';
import * as React from 'react';

import { gradientComponent } from '../../../hoc/GrandientComponent';

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
