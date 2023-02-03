import LogoSVG from '@icons/logo_vertical.svg';
import { SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

const LogoOfBanner = () => {
  return (
    <Box sx={styles.logoContainer}>
      <SvgIcon
        component={LogoSVG}
        viewBox="0 0 98 96"
        sx={styles.svgIconStyle}
      />
      <Box sx={styles.borderElement}></Box>
    </Box>
  );
};

export default LogoOfBanner;
