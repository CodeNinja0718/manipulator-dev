import { Box } from '@mui/material';

import styles from './styles';

const Footer = () => {
  return (
    <Box sx={styles.footerBox}>
      <p>This is Footer</p>
      <Box sx={styles.wave}></Box>
    </Box>
  );
};

export default Footer;
