import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';

import styles from './styles';

interface CommonTabsProps {
  tabs?: { label: React.ReactNode; component?: React.ReactNode }[];
  active?: number;
}

const CommonTabs = ({ tabs = [], active = 0 }: CommonTabsProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(active);
  }, [active]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const currentContent = useMemo(() => {
    return tabs.filter((item, index) => index === value) || [];
  }, [tabs, value]);

  return (
    <Box sx={styles.tabsContainer}>
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
        <Box sx={styles.underline}></Box>
      </Box>

      {/* Current Component */}
      {currentContent && (
        <Box mt={28}>{currentContent.map((item) => item.component)}</Box>
      )}
    </Box>
  );
};

export default CommonTabs;
