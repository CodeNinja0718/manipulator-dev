import CloseIcon from '@icons/close-icon.svg';
import Button from '@mui/material/Button';
import dynamic from 'next/dynamic';

const CommonModal = dynamic(() => import('components/CommonModal'));
const CommonTabs = dynamic(() => import('components/CommonTabs'));

interface SearchModalProps {
  open?: boolean;
  tabs: { label: React.ReactNode; component?: React.ReactNode }[];
  onClose?: () => void;
  activeTab?: number;
}

const SearchModal = ({
  open = false,
  tabs = [],
  onClose,
  activeTab = 0,
}: SearchModalProps) => {
  return (
    <CommonModal
      open={open}
      onClose={onClose}
      iconClose={CloseIcon}
      title="整体師検索"
      buttonElement={
        <Button
          color="primary"
          variant="contained"
          sx={{ width: '100%', height: 54 }}
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
