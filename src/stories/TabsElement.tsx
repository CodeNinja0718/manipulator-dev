import './main.css';

import CommonTabs from 'components/CommonTabs';
import React from 'react';

export interface TagsElementProps {
  tabs: { label: React.ReactNode; component?: React.ReactNode }[];
}

export const TabsElement = ({ tabs }: TagsElementProps) => {
  return <CommonTabs tabs={tabs} />;
};
