import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import styles from './styles';

interface CircleBoxProps {
  icon: React.ElementType;
  iconProps?: object;
  label: string | React.ReactElement;
  active?: boolean;
  sxCustom?: object;
  onClick?: () => void;
  disabled?: boolean;
}

const CircleBox = ({
  icon,
  iconProps,
  label,
  active,
  sxCustom = {},
  onClick,
  disabled = false,
}: CircleBoxProps) => {
  const containerBoxStyle = active ? styles.circleBoxActive : styles.circleBox;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{
        ...styles.boxContainer,
        ...sxCustom,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={90}
        height={90}
        className="customCircleBoxStyle"
        sx={disabled ? styles.circleBoxDisable : containerBoxStyle}
        onClick={disabled ? () => {} : onClick}
      >
        <SvgIcon
          component={icon}
          {...iconProps}
          sx={{
            ...styles.icon,
            color: (theme: Theme) =>
              active ? 'white' : theme.palette.grayText,
          }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={disabled ? styles.labelTextDisable : styles.labelText}
      >
        {label}
      </Typography>
    </Box>
  );
};
export default CircleBox;
