import ArrowIcon from '@icons/arrow.svg';
import SearchIcon from '@icons/search.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import styles from './styles';

const AdvanceSearchTopPage = () => {
  return (
    <>
      <Box position="relative" height={340} pt={39} pb={32}>
        <Image
          src="/images/search_bg.webp"
          alt="search-image"
          fill
          sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
        />
        <Typography
          position="relative"
          display="block"
          fontWeight="600"
          variant="h5"
          color="orangeBold"
          textAlign="center"
        >
          症状から探す
        </Typography>

        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={styles.button}
            startIcon={
              <SvgIcon
                component={SearchIcon}
                viewBox="0 0 39 42"
                color="orange"
              />
            }
            endIcon={
              <SvgIcon
                component={ArrowIcon}
                viewBox="0 0 14 30"
                color="orange"
              />
            }
          >
            整体師一覧を見る
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default AdvanceSearchTopPage;
