import './main.css';

import React from 'react';

import CircleBox from '../components/CircleBox';

export interface CircleBoxProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
}

export const CircleBoxElement = ({ icon, label, active }: CircleBoxProps) => {
  return <CircleBox icon={icon} label={label} active={active}></CircleBox>;
};
