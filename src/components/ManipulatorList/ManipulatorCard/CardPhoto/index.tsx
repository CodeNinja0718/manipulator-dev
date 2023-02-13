import { Box, Fade, Modal } from '@mui/material';
import type { IManipulator } from 'models/manipulator/interface';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

import styles from './styles';

interface ManipulatorCardPhotoProps {
  data: IManipulator;
}
const ManipulatorCardPhoto = ({ data }: ManipulatorCardPhotoProps) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };
  const handleViewImage = (value: string) => {
    setImage(value);
    setOpen(true);
  };
  return (
    <Box>
      <Box sx={styles.photoWrap}>
        {data.salon[0]?.photos?.map((item, index) => (
          <Image
            key={`photo-${index}`}
            src={`${item.url}`}
            alt="image-title"
            sizes="100vw"
            height={80}
            width={120}
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
              objectPosition: 'top center',
            }}
            onClick={() => handleViewImage(item.url)}
          />
        ))}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={styles.modal}
      >
        <Fade in={open} timeout={500}>
          <img
            src={image}
            alt="image-title"
            style={{
              maxHeight: '90%',
              maxWidth: '90%',
              outline: 'none',
            }}
          />
        </Fade>
      </Modal>
    </Box>
  );
};

export default ManipulatorCardPhoto;
