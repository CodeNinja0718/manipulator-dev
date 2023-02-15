import IconReloadSvg from '@icons/icon_sync.svg';
import {
  Box,
  Button,
  Grid,
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">検索結果</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box display={{ xs: 'block', tablet: 'none' }} textAlign="center">
                <Button
                  size="small"
                  variant="contained"
                  sx={styles.button}
                  startIcon={
                    <SvgIcon component={IconReloadSvg} inheritViewBox />
                  }
                >
                  条件を変更する
                </Button>
              </Box>
            </Grid>
          </Grid>
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
              secondary={'指定なし'}
            />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton}>
            <ListItemText
              sx={styles.listItemText}
              primary={'症状'}
              secondary={'指定なし'}
            />
          </ListItemButton>
        </List>

        <Box
          display={{ xs: 'none', tablet: 'block' }}
          textAlign="center"
          marginTop="30"
        >
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
