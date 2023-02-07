import CloseIcon from '@icons/close-icon.svg';
import Button from '@mui/material/Button';
import CommonModal from 'components/CommonModal';
import CommonTabs from 'components/CommonTabs';

interface SearchModalProps {
  open?: boolean;
  tabs: { label: React.ReactNode; component?: React.ReactNode }[];
  onClose?: () => void;
  activeTab?: number;
  onSetSelectedSymptom: (value: number) => void;
}

const SearchModal = ({
  open = false,
  tabs = [],
  onClose,
  activeTab = 0,
  onSetSelectedSymptom,
}: SearchModalProps) => {
  const handleClose = () => {
    const searchModal: SearchModalProps = {
      open: false,
      tabs: [],
      onClose,
      activeTab: 0,
      onSetSelectedSymptom,
    };
    searchModal.onClose?.();
    searchModal.onSetSelectedSymptom(0);
  };

  return (
    <CommonModal
      open={open}
      onClose={handleClose}
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
