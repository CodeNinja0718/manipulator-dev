import ArrowIcon from '@icons/arrow.svg';
import SearchIcon from '@icons/search.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import CircleBox from 'components/CircleBox';
import { FILTER_ITEMS } from 'components/TopPageComponents/SearchTopPage/const';
import Image from 'next/image';
import React from 'react';

import styles from './styles';

interface AdvanceSearchProps {
  onOpenSearch: () => void;
  onSetActiveTab: (value: number) => void;
  onSetSelectedSymptom: (value: number) => void;
}

const AdvanceSearch = ({
  onOpenSearch,
  onSetActiveTab,
  onSetSelectedSymptom,
}: AdvanceSearchProps) => {
  const handleOpenSearch = () => {
    onOpenSearch();
    onSetActiveTab(0);
  };

  const handleClickSymptom = (value: number) => {
    handleOpenSearch();
    onSetSelectedSymptom(value);
  };

  return (
    <>
      <Box position="relative" minHeight={340} pt={39} pb={32}>
        <Image
          src="/images/wood_bg.webp"
          alt="wood-image"
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

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="flex-start"
          sx={styles.filterArea}
        >
          {FILTER_ITEMS.map((item, index) => (
            <CircleBox
              key={item.url}
              icon={item.icon}
              label={item.label}
              iconProps={{ viewBox: item.viewBox }}
              onClick={() => handleClickSymptom(index)}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="center" paddingX="15px">
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
            onClick={handleOpenSearch}
          >
            整体師一覧を見る
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default AdvanceSearch;
