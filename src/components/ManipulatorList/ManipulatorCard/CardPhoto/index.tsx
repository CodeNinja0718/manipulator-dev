import { Box, Fade, Modal } from '@mui/material';
import get from 'lodash/get';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

import type { ManipulatorCardModel } from '../model';
import styles from './styles';

interface ManipulatorCardPhotoProps {
  data: ManipulatorCardModel;
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
        {get(data, 'photo', []).map((item, index) => (
          <Box
            key={`photo-${index}`}
            height={80}
            width={120}
            position="relative"
          >
            <Image
              src={`/${item.url}`}
              alt="image-title"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority
              style={{ objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => handleViewImage(`/${item.url}`)}
            />
          </Box>
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
