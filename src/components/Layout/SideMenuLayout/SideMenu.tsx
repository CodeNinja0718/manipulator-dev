import {
  Box,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

import type { SideMenuItem } from '.';
import styles from './styles';

interface SideMenuProps {
  menus: SideMenuItem[];
  isMobile?: boolean;
}

const SideMenu = ({ menus, isMobile }: SideMenuProps) => {
  const { route } = useRouter();
  return (
    <Box sx={styles.sideMenuBox}>
      <Box sx={styles.sideMenu}>
        {!isMobile && (
          <Box sx={styles.sideMenuTitleBox}>
            <Typography variant="subtitle1">マイページ</Typography>
          </Box>
        )}
        <List component="nav" aria-label="side-menu" sx={styles.listItem}>
          {menus.map((menu) => (
            <Box key={menu.path}>
              <Link href={menu.path} sx={styles.link}>
                <ListItemButton
                  sx={styles.listItemButton}
                  selected={route.startsWith(menu.path)}
                >
                  {menu.icon}
                  <ListItemText sx={styles.listItemText} primary={menu.label} />
                </ListItemButton>
              </Link>
              {menu.children &&
                menu.children.map((child) => (
                  <Link href={child.path} key={child.path} sx={styles.link}>
                    <Box sx={{ pl: '30px' }}>
                      <ListItemButton
                        sx={styles.listItemButton}
                        selected={route.startsWith(child.path)}
                      >
                        {child.icon}
                        <ListItemText
                          sx={styles.listItemText}
                          primary={child.label}
                        />
                      </ListItemButton>
                    </Box>
                  </Link>
                ))}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideMenu;
