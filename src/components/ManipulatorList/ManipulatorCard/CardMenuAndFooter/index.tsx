import ArrowIcon from '@icons/arrow.svg';
import ListSvg from '@icons/icon_list.svg';
import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import FormatDate from 'components/FormatDate';
import dayjs from 'dayjs';
import type { IManipulator, Menu } from 'models/manipulator/interface';
import Link from 'next/link';
import * as React from 'react';
import Helper from 'utils/helpers';

import styles from './styles';

interface CardMenuAndFooterProps {
  data: IManipulator;
}

const CardMenuAndFooter = ({ data }: CardMenuAndFooterProps) => {
  const timeSlots = Helper.getTimeSlot(data?.availableTimes)
    .filter(Boolean)
    .flat(1);

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
          {data.menus?.map((item: Menu) => (
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              key={`menu-${item.menuId}`}
              sx={{ mb: 12 }}
            >
              <Stack
                display={'flex'}
                flexDirection="row"
                justifyContent={'flex-start'}
                alignItems={'flex-start'}
                sx={{ flex: 1, mr: 12 }}
              >
                <Typography sx={styles.textStyle}>
                  {item.name}{' '}
                  {!!item.timeDisplay && (
                    <Typography
                      component={'span'}
                      sx={{ ...styles.textStyle, ml: 8 }}
                    >
                      {item.estimatedTime}分
                    </Typography>
                  )}
                </Typography>
              </Stack>
              <Stack>
                <Typography component="p" sx={styles.textStyle}>
                  {item.price || item.ticket?.price || 0}円
                </Typography>
              </Stack>
            </Box>
          ))}
          {timeSlots?.length > 0 && (
            <Box sx={styles.reservableTimeBox}>
              <Typography
                component="p"
                sx={styles.textStyle}
                marginBottom="10px"
              >
                {
                  <FormatDate
                    dateString={dayjs.utc(timeSlots?.[0]).toISOString()}
                  />
                }
                の予約可能時間
              </Typography>
              <Box sx={styles.reservableTimeWrap}>
                {timeSlots.map((item: string, index: number) => (
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
                        formatValue="HH:mm"
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
          component={Link}
          href={`/manipulator/${data._id}`}
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
