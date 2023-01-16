import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

interface CardItemProps {
  parentTitle?: string;
  titleIcon: any;
  description: string;
  svgProps?: object;
  svgStyle?: object;
  customStyle?: object;
}

const CardItem = ({
  parentTitle,
  titleIcon,
  description,
  svgProps,
  svgStyle,
  customStyle,
}: CardItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        display: 'flex',
        background: 'white',
        ...customStyle,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography fontSize={20} mb={2}>
          {parentTitle}
        </Typography>
        <SvgIcon
          component={titleIcon}
          color="orange"
          {...svgProps}
          sx={{ ...svgStyle }}
        />
        <Typography fontSize={20} mt={4}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
export default CardItem;
