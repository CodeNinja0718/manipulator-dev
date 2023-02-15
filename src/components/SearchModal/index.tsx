import CloseIcon from '@icons/close-icon.svg';
import Button from '@mui/material/Button';
import CommonModal from 'components/CommonModal';
import CommonTabs from 'components/CommonTabs';
import React, { useMemo } from 'react';

interface SearchModalProps {
  open?: boolean;
  title?: string;
  titleElement?: JSX.Element;
  tabs: { label: React.ReactNode; component?: React.ReactNode }[];
  onClose?: () => void;
  activeTab?: number;
  onSubmit: () => void;
  disabled: boolean;
}

const SearchModal = ({
  open = false,
  title,
  titleElement,
  tabs = [],
  onClose,
  activeTab = 0,
  onSubmit,
  disabled = false,
}: SearchModalProps) => {
  const openModal = useMemo(() => {
    return open;
  }, [open]);
  return (
    <CommonModal
      open={openModal}
      onClose={onClose}
      iconClose={CloseIcon}
      title={title}
      titleElement={titleElement}
      buttonElement={
        <Button
          color="primary"
          variant="contained"
          sx={{ width: '100%', height: 54 }}
          onClick={onSubmit}
          disabled={disabled}
        >
          検索
        </Button>
      }
    >
      <>
        <CommonTabs tabs={tabs} active={activeTab} />
      </>
    </CommonModal>
  );
};

export default SearchModal;
