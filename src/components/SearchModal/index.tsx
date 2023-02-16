import CloseIcon from '@icons/close-icon.svg';
import { Box, Button, CircularProgress } from '@mui/material';
import CommonModal from 'components/CommonModal';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

import styles from './styles';

const RenderLoading = () => {
  return (
    <Box sx={styles.loadingBox}>
      <CircularProgress size="small" sx={styles.loading} />
    </Box>
  );
};

const CommonTabs = dynamic(() => import('components/CommonTabs'), {
  loading: () => <RenderLoading />,
});

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
      <Box sx={styles.contentContainer}>
        <CommonTabs tabs={tabs} active={activeTab} />
      </Box>
    </CommonModal>
  );
};

export default SearchModal;
