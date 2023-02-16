import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { SORT_TYPE, SORT_TYPE_VALUE } from 'utils/const';

import styles from './styles';

interface ManipulatorHeaderProps {
  resultTotal: number;
}

const ManipulatorHeader = ({ resultTotal = 0 }: ManipulatorHeaderProps) => {
  const [sortType, setSortType] = React.useState(SORT_TYPE_VALUE.standard);

  return (
    <Grid container spacing={2} marginBottom="30px" alignItems="center">
      <Grid item xs={3} tablet={5} display="flex" alignItems="center">
        <Typography sx={styles.resultTotal}>{resultTotal}</Typography>
        <span>件</span>
      </Grid>
      <Grid item xs={9} tablet={7} textAlign="right">
        <Typography component="span" sx={styles.sortTitle}>
          並び替え
        </Typography>
        <ButtonGroup
          size="small"
          aria-label="small button group"
          sx={{ height: 30 }}
        >
          {SORT_TYPE.map((item: any) => (
            <Button
              sx={{
                ...styles.buttonItemGroup,
                ...{
                  borderColor:
                    sortType === item.value ? '#ea6500 !important' : '#999999',
                },
              }}
              key={item.value}
              size="small"
              onClick={() => setSortType(item.value)}
              color={sortType === item.value ? 'orange' : 'inherit'}
              variant={sortType === item.value ? 'contained' : 'outlined'}
            >
              {item.label}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default ManipulatorHeader;
