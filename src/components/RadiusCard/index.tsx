import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface RadiusCardProps {
  parentTitle?: string;
  title?: string;
  description?: string;
  customStyle?: object;
  imageUrl?: string;
  imageStyle?: object;
  children?: React.ReactNode;
}

const RadiusCard = ({
  parentTitle,
  title,
  description,
  customStyle,
  imageUrl,
  imageStyle,
  children,
}: RadiusCardProps) => {
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
      sx={{
        display: 'flex',
        background: 'white',
        ...customStyle,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          position="relative"
          sx={{
            ...imageStyle,
          }}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title || imageUrl}
              fill
              sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
            />
          )}
        </Box>
        <Typography fontSize={20} fontWeight={500} mb={2}>
          {parentTitle}
        </Typography>
        <Typography color="orangeText" fontWeight={500} fontSize={27}>
          {title}
        </Typography>
        <Typography fontSize={20} fontWeight={500} mt={4}>
          {description}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
export default RadiusCard;
