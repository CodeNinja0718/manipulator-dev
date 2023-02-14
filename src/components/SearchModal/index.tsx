import CloseIcon from '@icons/close-icon.svg';
import Button from '@mui/material/Button';
import CommonModal from 'components/CommonModal';
import CommonTabs from 'components/CommonTabs';

interface SearchModalProps {
  open?: boolean;
  tabs: { label: React.ReactNode; component?: React.ReactNode }[];
  onClose?: () => void;
  activeTab?: number;
  onSubmit: () => void;
  disabled: boolean;
}

const SearchModal = ({
  open = false,
  tabs = [],
  onClose,
  activeTab = 0,
  onSubmit,
  disabled = false,
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
