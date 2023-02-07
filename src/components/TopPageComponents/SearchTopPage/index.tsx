import LocationIcon from '@icons/icon_area_on.svg';
import StationIcon from '@icons/icon_station_on.svg';
import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import TabLabelItem from 'components/CommonTabs/TabLabelItem';
import AdvanceSearch from 'components/TopPageComponents/SearchTopPage/AdvanceSearch';
import DefaultSearch from 'components/TopPageComponents/SearchTopPage/DefaultSearchPage';
import SearchModal from 'components/TopPageComponents/SearchTopPage/SearchModal';
import React, { useState } from 'react';

import LocationTabItem from './Tabs/TabItem/LocationTabItem';
import StationTabItem from './Tabs/TabItem/StationTabItem';

const renderTabList = (
  selectedSymptom: number,
  onSetSelectedSymptom: (value: number) => void,
) => {
  const list = [
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
      component: (
        <LocationTabItem
          selectedSymptom={selectedSymptom}
          onSetSelectedSymptom={onSetSelectedSymptom}
        />
      ),
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
      component: (
        <StationTabItem
          selectedSymptom={selectedSymptom}
          onSetSelectedSymptom={onSetSelectedSymptom}
        />
      ),
    },
  ];
  return list;
};

const SearchTopPage = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSymptom, setSelectedSymptom] = useState(0);
  const handleOpenSearch = () => setOpen(true);
  const handleCloseSearch = () => setOpen(false);
  const handleSetActiveTab = (value: number) => setActiveTab(value);
  const handleSetSelectedSymptom = (value: number) => setSelectedSymptom(value);

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
        onSetSelectedSymptom={handleSetSelectedSymptom}
      />

      <SearchModal
        open={open}
        tabs={renderTabList(selectedSymptom, handleSetSelectedSymptom)}
        activeTab={activeTab}
        onClose={handleCloseSearch}
        onSetSelectedSymptom={handleSetSelectedSymptom}
      />
    </Box>
  );
};

export default SearchTopPage;
