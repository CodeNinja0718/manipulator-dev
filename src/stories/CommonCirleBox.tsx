import './main.css';

import React from 'react';

import CirleBox from '../components/CirleBox';

export interface CirleBoxProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
}

export const CommonCirleBox = ({ icon, label, active }: CirleBoxProps) => {
  return <CirleBox icon={icon} label={label} active={active}></CirleBox>;
};
