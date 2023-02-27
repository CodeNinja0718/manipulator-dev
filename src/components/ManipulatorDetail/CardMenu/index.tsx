import ArrowIcon from '@icons/arrow.svg';
import ListSvg from '@icons/icon_list.svg';
import { Box, Button, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import type { IManipulator, Menu } from 'models/manipulator/interface';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

import styles from './styles';

interface CardMenuProps {
  data: IManipulator;
}
const CardMenu = ({ data }: CardMenuProps) => {
  const [list, setList] = useState<Menu[]>([]);
  const [totalGet, setTotalGet] = useState(0);
  const [page, setPage] = useState(1);

  const spaceGet = 5;
  const getList = useCallback(() => {
    setTotalGet(spaceGet * page);
    setList(data.menus.slice(0, totalGet));
  }, [page, data.menus, totalGet]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    getList();
  };

  useEffect(() => {
    if (data?.menus?.length) {
      getList();
    }
  }, [data?.menus?.length, getList]);

  return (
    <Box>
      {data?.menus?.length > 0 && (
        <Box sx={styles.treatmentBox}>
          <Stack
            direction="row"
            spacing="10px"
            alignItems="center"
            marginBottom={10}
          >
            <Box width={20} height={18} display="inline-block">
              <SvgIcon
                component={ListSvg}
                sx={{
                  width: 'inherit',
                  height: 'inherit',
                  color: '#ea6500',
                }}
                inheritViewBox
              />
            </Box>
            <Typography
              component="label"
              fontSize="16px"
              fontWeight="bold"
              color="orangeText"
            >
              施術メニュー
            </Typography>
          </Stack>
          {list.map((item: Menu, index: number) => (
            <Grid
              container
              key={`menu-${index}`}
              marginBottom="10px"
              bgcolor={'#fff'}
              borderRadius="10px"
              padding="15px 15px 15px 15px"
            >
              <Grid item xs={7} md={5}>
                <Typography component="p" sx={styles.textStyle}>
                  {item.name}
                </Typography>
              </Grid>
              <Grid item xs={5} md={7} textAlign={{ xs: 'right' }}>
                <Typography component="p" sx={styles.textStyle}>
                  {item.price}円
                </Typography>
              </Grid>
            </Grid>
          ))}
          {totalGet < data.menus.length && (
            <Box textAlign="center" margin="20px 0px">
              <Button
                onClick={loadMore}
                variant="outlined"
                sx={styles.button}
                endIcon={
                  <SvgIcon
                    component={ArrowIcon}
                    viewBox="0 0 14 30"
                    color="inherit"
                  />
                }
              >
                メニューをさらに表示
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CardMenu;
