import './main.css';

import React from 'react';

import CommonCollapse from '../components/CommonCollapse';

export interface CollapseProps {
  title?: string;
  content?: string;
  label?: string;
}

export const Collapse = ({ title, content, label }: CollapseProps) => {
  return (
    <CommonCollapse
      title={title}
      content={content}
      label={label}
    ></CommonCollapse>
  );
};
