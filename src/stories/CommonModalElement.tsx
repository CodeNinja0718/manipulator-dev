import './main.css';

import React from 'react';

import CommonModal from '../components/CommonModal';

export interface CommonModalElementProps {
  title?: string;
  titleElement?: JSX.Element;
  buttonElement?: JSX.Element;
  isHideCloseButton?: boolean;
  iconClose?: React.ElementType;
  open: boolean;
  onClose?: () => void;
  children?: JSX.Element;
}

export const CommonModalElement = ({
  title,
  titleElement,
  buttonElement,
  isHideCloseButton,
  iconClose,
  open = false,
  onClose,
  children,
}: CommonModalElementProps) => {
  return (
    <>
      <CommonModal
        title={title}
        titleElement={titleElement}
        buttonElement={buttonElement}
        isHideCloseButton={isHideCloseButton}
        iconClose={iconClose}
        open={open}
        onClose={onClose}
      >
        {children}
      </CommonModal>
    </>
  );
};
