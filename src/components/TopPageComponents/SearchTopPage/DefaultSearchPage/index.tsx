import ArrowIcon from '@icons/arrow.svg';
import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

import styles from './styles';

interface DefaultSearchProps {
  onOpenSearch: () => void;
  onSetActiveTab: (value: number) => void;
}

const DefaultSearchPage = ({
  onOpenSearch,
  onSetActiveTab,
}: DefaultSearchProps) => {
  const handleOpenSearch = (value: number) => {
    onOpenSearch();
    onSetActiveTab(value);
  };

  return (
    <>
      <Box
        display="flex"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        padding="20px 10px"
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
          endIcon={
            <SvgIcon component={ArrowIcon} viewBox="0 0 14 30" color="orange" />
          }
          onClick={() => handleOpenSearch(0)}
        >
          エリアから探す
        </Button>
        <Button
          variant="contained"
          sx={styles.button}
          startIcon={
            <SvgIcon
              component={StationIcon}
              viewBox="0 0 29 35"
              color="orange"
            />
          }
          endIcon={
            <SvgIcon component={ArrowIcon} viewBox="0 0 14 30" color="orange" />
          }
          onClick={() => handleOpenSearch(1)}
        >
          駅から探す
        </Button>
      </Box>
    </>
  );
};
export default DefaultSearchPage;
