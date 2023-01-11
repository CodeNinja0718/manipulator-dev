import Drawer from '@mui/material/Drawer';
import type { ReactNode } from 'react';

interface CommonDrawerProps {
  open: boolean;
  onClose: (open: boolean) => void;
  children?: ReactNode;
}

const CommonDrawer = ({ open, onClose, children }: CommonDrawerProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      {children}
    </Drawer>
  );
};

export default CommonDrawer;
