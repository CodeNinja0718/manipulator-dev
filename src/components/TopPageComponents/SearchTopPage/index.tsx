import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const DefaultSearch = dynamic(
  () => import('components/TopPageComponents/SearchTopPage/DefaultSearchPage'),
);
const AdvanceSearch = dynamic(
  () => import('components/TopPageComponents/SearchTopPage/AdvanceSearch'),
);
const SearchModal = dynamic(
  () => import('components/TopPageComponents/SearchTopPage/SearchModal'),
);
const TabLabelItem = dynamic(
  () => import('components/CommonTabs/TabLabelItem'),
);

const TABS = [
  {
    label: (
      <TabLabelItem
        label="エリアから探す"
        icon={LocationIcon}
        style={{
          width: 16,
          height: 19,
        }}
      />
    ),
    component: <Box>This is text of item one</Box>,
  },
  {
    label: (
      <TabLabelItem
        label="駅から探す"
        icon={StationIcon}
        style={{
          width: 16,
          height: 23,
        }}
      />
    ),
    component: <Box>This is text of item two</Box>,
  },
];

const SearchTopPage = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handleOpenSearch = () => setOpen(true);
  const handleCloseSearch = () => setOpen(false);
  const handleSetActiveTab = (value: number) => setActiveTab(value);

  return (
    <Box>
      {/* Default Search */}
      <Box sx={{ background: (theme: Theme) => theme.palette.orangeGradient }}>
        <DefaultSearch
          onOpenSearch={handleOpenSearch}
          onSetActiveTab={handleSetActiveTab}
        />
      </Box>

      {/* Advance Search - Filter */}
      <AdvanceSearch
        onOpenSearch={handleOpenSearch}
        onSetActiveTab={handleSetActiveTab}
      />

      <SearchModal
        open={open}
        tabs={TABS}
        activeTab={activeTab}
        onClose={handleCloseSearch}
      />
    </Box>
  );
};

export default SearchTopPage;
