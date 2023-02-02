import {
  DescriptionOutlined,
  EventBusyOutlined,
  QuestionAnswerOutlined,
} from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import FormatDate from 'components/FormatDate';
import * as React from 'react';
import { RESERVATION_STATUS_VALUE } from 'utils/const';

import ReservationItemIconText from './IconText';
import ReservationItemHeader from './ItemHeader';
import ReservationItemLineText from './Line';
import type { ReservationCardModel } from './model';
import styles from './styles';

interface ReservationItemProps {
  data: ReservationCardModel;
}

const ReservationCard = ({ data }: ReservationItemProps) => {
  return (
    <Box sx={styles.reservationBox}>
      <ReservationItemHeader data={data} />
      <Box sx={styles.reservationContent}>
        <Grid container spacing={20}>
          <Grid item xs={12} tablet={8}>
            <Box borderBottom={'1px solid  #ccc'} padding="0px 0px 13px">
              <Typography component="label" fontWeight={'600'}>
                ご予約日
              </Typography>
              <Typography component="p">
                <FormatDate dateString={data.date.toString()} />{' '}
                {`${data.startTime}~${data.endTime}`}
              </Typography>
            </Box>
            <ReservationItemLineText
              label="初診コース 60分"
              value={data.firstVisitPrice}
            />
            {data.status === RESERVATION_STATUS_VALUE.confirmed && (
              <>
                <ReservationItemLineText label="回数券" value={data.couponA} />
                <ReservationItemLineText
                  sxText={styles.couponText}
                  label="クーポン"
                  value={data.couponB}
                />
              </>
            )}

            <ReservationItemLineText
              sxText={styles.priceText}
              label="お支払い金額予定"
              value={
                <>
                  <Typography component={'span'}>
                    {data.expectedPayment}
                  </Typography>
                  <Typography component={'span'}>円</Typography>
                </>
              }
            />
            {data.status === RESERVATION_STATUS_VALUE.confirmed && (
              <ReservationItemLineText
                label="キャンセル料発生日"
                value={data.cancellationDate.toString()}
                isDate={true}
              />
            )}
          </Grid>
          <Grid item xs={12} tablet={4}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                flexDirection: { xs: 'row', tablet: 'column' },
                gap: { xs: '20px', tablet: '10px' },
              }}
            >
              {data.status !== RESERVATION_STATUS_VALUE.cancel ? (
                <>
                  <ReservationItemIconText
                    bgColor="primary.main"
                    label="整体師詳細を見る"
                    icon={<DescriptionOutlined />}
                  />
                  <ReservationItemIconText
                    bgColor="#63564d"
                    label="予約を
              キャンセル"
                    icon={<EventBusyOutlined />}
                  />
                  <ReservationItemIconText
                    bgColor="#377ed1"
                    label="整体師詳細を見る"
                    icon={<QuestionAnswerOutlined />}
                  />
                </>
              ) : (
                <Typography component="p" fontWeight={600} color={'#d82c2c'}>
                  ※キャンセル料発生日を過ぎたため、キャンセル料のお支払いがあります。
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReservationCard;
