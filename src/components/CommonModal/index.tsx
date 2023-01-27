import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: '30px 50px 54px',
  '&:focus-visible': {
    outline: 'none',
  },
};

interface CommonModalProps {
  title?: string;
  titleElement?: JSX.Element;
  buttonElement?: JSX.Element;
  isHideCloseButton?: boolean;
  iconClose?: React.ElementType;
  open?: boolean;
  onClose?: () => void;
  children?: JSX.Element;
}

const CommonModal = ({
  title,
  titleElement,
  buttonElement,
  isHideCloseButton = false,
  iconClose,
  open = false,
  onClose,
  children,
}: CommonModalProps) => {
  const renderCloseButton = () => {
    if (isHideCloseButton) return false;

    return iconClose ? (
      <Box width={24} height={24} position="absolute" top={20} right={20}>
        <SvgIcon
          component={iconClose}
          viewBox="0 0 33 33"
          onClick={onClose}
          sx={{
            color: '#949494',
            cursor: 'pointer',
          }}
        />
      </Box>
    ) : (
      <Box width={45} height={45} position="absolute" top={10} right={10}>
        <SvgIcon
          component={CloseIcon}
          onClick={onClose}
          sx={{
            color: '#949494',
            cursor: 'pointer',
            fontSize: 45,
          }}
        />
      </Box>
    );
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              width: '100%',
              margin: 'auto',
              mb: 36,
            }}
          >
            {titleElement || <Typography variant="title">{title}</Typography>}
          </Box>
          {/* Close Button */}
          {renderCloseButton()}
          {/* Content of Modal */}
          {children}
          {/* Button */}
          {buttonElement && <Box mt={40}>{buttonElement}</Box>}
        </Box>
      </Modal>
    </>
  );
};

export default CommonModal;
