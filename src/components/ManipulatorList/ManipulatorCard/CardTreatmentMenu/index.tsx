import ListSvg from '@icons/icon_list.svg';
import { Box, Button, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

import type { ManipulatorCardModel } from '../model';
import styles from './styles';

interface ManipulatorCardTreatmentMenuProps {
  data: ManipulatorCardModel;
}
const ManipulatorCardTreatmentMenu = ({
  data,
}: ManipulatorCardTreatmentMenuProps) => {
  return (
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
      {data.treatmentMenu.menu.map((item: any, index: number) => (
        <Grid container spacing={10} key={`menu-${index}`} marginBottom="5px">
          <Grid item xs={5}>
            <Typography component="p" sx={styles.textStyle}>
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography component="p" sx={styles.textStyle}>
              {item.price}
            </Typography>
          </Grid>
        </Grid>
      ))}
      <Box sx={styles.reservableTimeBox}>
        <Typography component="p" sx={styles.textStyle} marginBottom="10px">
          11/10(月)の予約可能時間
        </Typography>
        <Box sx={styles.reservableTimeWrap}>
          {data.treatmentMenu.reservableTime.map(
            (item: string, index: number) => (
              <Button
                sx={styles.labelItem}
                color={'inherit'}
                variant={'outlined'}
                key={index}
                size="small"
              >
                {item}
              </Button>
            ),
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ManipulatorCardTreatmentMenu;
