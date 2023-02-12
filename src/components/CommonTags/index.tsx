import Box from '@mui/material/Box';

import styles from './styles';

interface CommonTagsProps {
  index: number;
  label: string;
  active?: boolean;
  onClick?: (value: number) => void;
}

const CommonTags = ({
  index,
  label,
  active = false,
  onClick,
}: CommonTagsProps) => {
  const handleClick = () => {
    const tagElement: CommonTagsProps = {
      index,
      label,
      active,
      onClick,
    };

    if (tagElement.onClick) tagElement.onClick(index);
  };

  return (
    <Box sx={active ? styles.itemActive : styles.item} onClick={handleClick}>
      {label}
    </Box>
  );
};

export default CommonTags;
