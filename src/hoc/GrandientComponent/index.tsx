import { Box } from '@mui/material';

import styles from './styles';

export function gradientComponent(element: React.ReactNode, gradient?: string) {
  const gradientColor = gradient ? styles[gradient] : {};
  return <Box sx={gradientColor || { background: gradient }}>{element}</Box>;
}
