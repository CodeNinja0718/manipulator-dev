import type { PropTypes } from '@mui/material';
import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import { useUser } from 'hooks';
import Link from 'next/link';

const Navbar = ({
  navbar = [],
  color = 'white',
  iconColor = 'white',
}: {
  navbar: any[];
  color?: PropTypes.Color | string;
  iconColor?: PropTypes.Color | string;
}) => {
  useUser({ enabled: false });

  return (
    <Box display="flex">
      <Stack
        direction="row"
        spacing={40}
        flex={1}
        sx={{ display: { xs: 'none', tablet: 'flex' } }}
      >
        {navbar.map((section) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={section.href}
            href={section.href}
            rel="noreferrer"
          >
            <Box display="flex" alignItems="center">
              <Box height={20}>
                <SvgIcon
                  component={section.icon}
                  sx={{ color: iconColor, width: 'auto', height: 'inherit' }}
                  viewBox={section.viewBox}
                />
              </Box>
              <Typography
                component="span"
                fontWeight={500}
                color={color}
                ml={20}
              >
                {section.label}
              </Typography>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Navbar;
