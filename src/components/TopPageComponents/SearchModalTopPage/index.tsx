import CloseIcon from '@icons/close-icon.svg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';

const CommonModal = dynamic(() => import('components/CommonModal'));

interface SearchModalTopPageProps {
  open?: boolean;
  onClose?: () => void;
}

const SearchModalTopPage = ({
  open = false,
  onClose,
}: SearchModalTopPageProps) => {
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </>
    </CommonModal>
  );
};

export default SearchModalTopPage;
