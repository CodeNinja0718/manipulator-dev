import { Box } from '@mui/material';

import styles from './styles';

export function gradientComponent(element: React.ReactNode, gradient?: string) {
  const gradientColor = gradient
    ? styles[gradient] || {
        backgroundColor: 'initial',
        '& > *': { background: gradient },
      }
    : {};
  return <Box sx={gradientColor}>{element}</Box>;
}
