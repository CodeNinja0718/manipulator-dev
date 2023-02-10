import IconReloadSvg from '@icons/icon_sync.svg';
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Typography,
} from '@mui/material';
import * as React from 'react';

import styles from './styles';

export interface SearchColumnItem {
  href: string;
  label: string;
  // icon: React.ReactNode;
  icon: any;
  viewBox?: string;
  children?: SearchColumnItem[];
}

const SearchColumn = () => {
  return (
    <Box sx={styles.searchColumn}>
      <Box sx={styles.searchColumnBox}>
        <Box sx={styles.searchColumnTitleBox}>
          <Typography variant="subtitle1">検索結果</Typography>
        </Box>
        <List component="nav" aria-label="side-menu" sx={styles.listItem}>
          <ListItemButton sx={styles.listItemButton}>
            <ListItemText
              sx={styles.listItemText}
              primary={'エリア'}
              secondary={'渋谷/東京都/関東'}
            />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton}>
            <ListItemText
              sx={styles.listItemText}
              primary={'日付'}
              secondary={'2022/11/10（月）'}
            />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton}>
            <ListItemText
              sx={styles.listItemText}
              primary={'症状'}
              secondary={'慢性疲労症候群'}
            />
          </ListItemButton>
        </List>
        <Box display="block" textAlign="center">
          <Button
            size="small"
            variant="contained"
            sx={styles.button}
            startIcon={<SvgIcon component={IconReloadSvg} inheritViewBox />}
          >
            条件を変更する
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchColumn;
