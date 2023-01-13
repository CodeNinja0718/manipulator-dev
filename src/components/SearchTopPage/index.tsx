import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles';

const SearchTopPage = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      sx={styles.searchContainer}
    >
      <Button
        variant="contained"
        sx={styles.button}
        startIcon={
          <SvgIcon
            component={LocationIcon}
            viewBox="0 0 29 35"
            color="orange"
          />
        }
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        エリアから探す
      </Button>
      <Button
        variant="contained"
        sx={styles.button}
        startIcon={
          <SvgIcon component={StationIcon} viewBox="0 0 29 35" color="orange" />
        }
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        駅から探す
      </Button>
    </Box>
  );
};
export default SearchTopPage;
