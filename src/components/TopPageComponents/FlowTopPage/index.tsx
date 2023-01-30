import ArrowIcon from '@icons/arrow.svg';
import { Button, SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import styles from './styles';

const FlowTopPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={styles.wrapper}
    >
      <Box>
        {/* Mobile Button */}
        <Button
          variant="contained"
          sx={{ ...styles.button, ...{ marginBottom: 40 } }}
          endIcon={
            <SvgIcon
              component={ArrowIcon}
              viewBox="0 0 14 30"
              color="inherit"
            />
          }
        >
          まずは整体師を検索！
        </Button>

        <Typography sx={styles.flowTitle} variant="title">
          利用方法
        </Typography>
        {/* Desktop Image */}
        <Box position="relative" sx={styles.flowDesktopImage}>
          <Image
            src="/images/flow.webp"
            alt="flow-image"
            fill
            sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
          />
        </Box>
        {/* Mobile Image */}

        <Box sx={styles.flowMobileImage}>
          <Image
            src="/images/flow_mobile.webp"
            alt="flow-image"
            fill
            sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
          />
        </Box>

        {/* Mobile Button */}
        <Button
          variant="contained"
          sx={{ ...styles.button, ...{ marginTop: 40 } }}
          endIcon={
            <SvgIcon
              component={ArrowIcon}
              viewBox="0 0 14 30"
              color="inherit"
            />
          }
        >
          まずは整体師を検索！
        </Button>
      </Box>
    </Box>
  );
};
export default FlowTopPage;
