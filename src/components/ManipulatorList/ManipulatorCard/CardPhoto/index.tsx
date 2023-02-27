import { Box, Fade, Modal, useMediaQuery } from '@mui/material';
import type { IManipulator } from 'models/manipulator/interface';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';
import theme from 'theme';

import styles from './styles';

interface ManipulatorCardPhotoProps {
  data: IManipulator;
  width: number;
  height: number;
  isInDetail?: boolean;
}
const ManipulatorCardPhoto = ({
  data,
  width,
  height,
  isInDetail,
}: ManipulatorCardPhotoProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('normalTablet'), {
    noSsr: true,
  });
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            height={isInDetail && isMobile ? 110 : height}
            width={isInDetail && isMobile ? 160 : width}
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
              objectPosition: 'top center',
              marginRight: 10,
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
