import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';

import styles from './styles';

interface CommonTabsProps {
  tabs?: { label: React.ReactNode; component?: React.ReactNode }[];
  active?: number;
  onChangeTab?: (value: number) => void;
  isShowTabs?: boolean;
}

const CommonTabs = ({
  tabs = [],
  active = 0,
  onChangeTab,
  isShowTabs = false,
}: CommonTabsProps) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(active);
  }, [active]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (onChangeTab) onChangeTab(newValue);
  };

  const currentContent = useMemo(() => {
    return tabs.filter((_item, index) => index === value) || [];
  }, [tabs, value]);

  return (
    <Box sx={styles.tabsContainer} className="wrapperTab">
      {isShowTabs && (
        <>
          <Box sx={styles.tabList} className="customTabs">
            <Tabs value={value} onChange={handleChange}>
              {tabs.map((item, index) => (
                <Tab
                  key={`tabs-${index}`}
                  label={<Box>{item.label}</Box>}
                  sx={styles.tabItem}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={styles.underline} className="underlineCustom"></Box>
        </>
      )}
      {/* Current Component */}
      {currentContent && (
        <Box sx={styles.contentContainer} className="contentTab">
          {currentContent.map((item, index) => (
            <Box key={`component-tabs-${index}`}>{item.component}</Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CommonTabs;
