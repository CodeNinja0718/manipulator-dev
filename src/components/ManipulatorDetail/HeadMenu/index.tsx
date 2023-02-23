import { Box, Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';

import styles from './styles';

export interface MenuHeadItem {
  title: string;
  link: string;
}
interface HeadMenuProps {
  menus: MenuHeadItem[];
}
const handleClickScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const HeadMenu = ({ menus }: HeadMenuProps) => {
  return (
    <Stack
      spacing={{ xs: 12, tablet: 15 }}
      justifyContent="center"
      divider={
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: 'graySolid',
            height: 14,
            position: 'relative',
            top: 6,
          }}
        />
      }
      direction="row"
      sx={styles.linkStyle}
    >
      {menus.map((menu: MenuHeadItem) => (
        <Box onClick={() => handleClickScroll(menu.link)} key={menu.link}>
          <Typography component="span" fontSize="14px" color="graySolid">
            {menu.title}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default HeadMenu;
