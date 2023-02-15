import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import React from 'react';

import styles from './styles';

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

const renderCloseButton = (
  isHideCloseButton?: boolean,
  iconClose?: React.ElementType,
  onClose?: () => void,
) => {
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
  return (
    <>
      <Modal open={open} onClose={onClose} keepMounted>
        <Box sx={styles.modalContainer}>
          <Box display="flex" justifyContent="center" sx={styles.titleModal}>
            {titleElement || <Typography variant="title">{title}</Typography>}
          </Box>
          {/* Close Button */}
          {renderCloseButton(isHideCloseButton, iconClose, onClose)}
          {/* Content of Modal */}
          <Box sx={styles.bodyModal}>{children}</Box>
          {/* Button */}
          {buttonElement && (
            <Box maxWidth={522} m="auto" mt={40}>
              {buttonElement}
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CommonModal;
