import {
  Box,
  Link,
  List,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

import styles from './styles';

export interface SideMenuItem {
  href: string;
  label: string;
  // icon: React.ReactNode;
  icon: any;
  viewBox?: string;
  children?: SideMenuItem[];
}
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
            <Box key={menu.href}>
              <Link
                href={menu.href}
                sx={{ ...styles.link, ...{ marginBottom: 15 } }}
              >
                <ListItemButton
                  sx={styles.listItemButton}
                  selected={route.startsWith(menu.href)}
                >
                  {menu.viewBox ? (
                    <Box height={20}>
                      <SvgIcon
                        component={menu.icon}
                        sx={{
                          width: 'auto',
                          height: 'inherit',
                        }}
                        viewBox={menu.viewBox}
                      />
                    </Box>
                  ) : (
                    menu.icon
                  )}
                  <ListItemText sx={styles.listItemText} primary={menu.label} />
                </ListItemButton>
              </Link>
              {menu.children &&
                menu.children.map((child) => (
                  <Link href={child.href} key={child.href} sx={styles.link}>
                    <Box sx={{ pl: '30px' }}>
                      <ListItemButton
                        sx={styles.listItemButton}
                        selected={route.startsWith(child.href)}
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
        <Link sx={styles.sideMenuText}>
          <Typography>整体院の方はこちら</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default SideMenu;
