import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

const TabLabelItem = ({
  label,
  style = {},
  icon,
}: {
  label: string;
  style?: object;
  icon: React.ElementType;
}) => {
  return (
    <Box display="flex" alignItems="center">
      <SvgIcon component={icon} viewBox="0 0 29 35" sx={style} />
      <Typography pl={7.5} fontWeight={600}>
        {label}
      </Typography>
    </Box>
  );
};

export default TabLabelItem;
