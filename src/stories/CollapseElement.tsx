import './main.css';

import React from 'react';

import CommonCollapse from '../components/CommonCollapse';

export interface CollapseElementProps {
  title?: string;
  content?: string;
  label?: string;
}

export const CollapseElement = ({
  title,
  content,
  label,
}: CollapseElementProps) => {
  return (
    <CommonCollapse
      title={title}
      content={content}
      label={label}
    ></CommonCollapse>
  );
};
