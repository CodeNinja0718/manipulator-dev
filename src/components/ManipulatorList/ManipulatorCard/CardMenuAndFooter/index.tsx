import ArrowIcon from '@icons/arrow.svg';
import ListSvg from '@icons/icon_list.svg';
import { Box, Button, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import FormatDate from 'components/FormatDate';
import dayjs from 'dayjs';
import type { IManipulator, Menu } from 'models/manipulator/interface';
import { useRouter } from 'next/router';
import * as React from 'react';

import styles from './styles';

interface CardMenuAndFooterProps {
  data: IManipulator;
}
const CardMenuAndFooter = ({ data }: CardMenuAndFooterProps) => {
  const router = useRouter();
  const { date } = router.query;
  return (
    <Box>
      {data.menus?.length > 0 && (
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
          {data.menus?.map((item: Menu, index: number) => (
            <Grid
              container
              spacing={10}
              key={`menu-${index}`}
              marginBottom="5px"
            >
              <Grid item xs={7} md={5}>
                <Stack direction={'row'} spacing={8}>
                  <Typography sx={styles.textStyle}>{item.name}</Typography>
                  {item.timeDisplay && (
                    <Typography sx={styles.textStyle}>
                      {item.estimatedTime}分
                    </Typography>
                  )}
                </Stack>
              </Grid>
              <Grid
                item
                xs={5}
                md={7}
                textAlign={{ xs: 'right', tablet: 'left' }}
              >
                <Typography component="p" sx={styles.textStyle}>
                  {item.price}円
                </Typography>
              </Grid>
            </Grid>
          ))}
          {date && (
            <Box sx={styles.reservableTimeBox}>
              <Typography
                component="p"
                sx={styles.textStyle}
                marginBottom="10px"
              >
                {<FormatDate dateString={date.toString()} />}
                (月)の予約可能時間
              </Typography>
              <Box sx={styles.reservableTimeWrap}>
                {data.timeSlots?.length &&
                  data.timeSlots.map((item: string, index: number) => (
                    <Button
                      sx={styles.labelItem}
                      color={'inherit'}
                      variant={'outlined'}
                      key={index}
                      size="small"
                    >
                      {
                        <FormatDate
                          dateString={dayjs.utc(item).tz()}
                          formatValue="hh:mm"
                        />
                      }
                    </Button>
                  ))}
              </Box>
            </Box>
          )}
        </Box>
      )}
      <Box textAlign="center" marginTop="20px">
        <Button
          onClick={() =>
            router.push({
              pathname: `/manipulator/${data._id}`,
            })
          }
          variant="contained"
          sx={styles.button}
          endIcon={
            <SvgIcon
              component={ArrowIcon}
              viewBox="0 0 14 30"
              color="inherit"
            />
          }
        >
          詳細を見る
        </Button>
      </Box>
    </Box>
  );
};

export default CardMenuAndFooter;
