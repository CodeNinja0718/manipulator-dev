import IconDetailSvg from '@icons/icon_detail_white.svg';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Link from 'components/Link';
import dayjs from 'dayjs';
import type { IReservationItem } from 'models/reservation/interface';
import { ReservationStatus } from 'models/reservation/interface';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import { RESERVATION_STATUS_TEXT } from 'utils/const';

import styles from './styles';

interface ReservationCardProps {
  data: IReservationItem;
}

const ReservationCard = ({ data }: ReservationCardProps) => {
  const startTimeDay = dayjs(data?.startTime).tz();
  const endTimeDay = dayjs(data?.endTime).tz();
  const bookingInfo =
    data.status === ReservationStatus.DONE ? data.result : data.plan;
  const { menuInfo } = bookingInfo;

  const totalCash = (() => {
    if (data.couponDiscount) {
      return bookingInfo.amount;
    }
    return bookingInfo.totalAmount;
  })();

  const renderActions = () => {
    if (data.status === ReservationStatus.PAID_CANCELED) {
      return (
        <Typography color="#d82c2c" fontWeight="bold">
          ※キャンセル料発生日を過ぎたため、キャンセル料のお支払いがあります。
        </Typography>
      );
    }
    if (data.status === ReservationStatus.RESERVED) {
      return (
        <>
          <Link
            href={`/manipulator/${data.manipulatorInfo.manipulatorId}`}
            sx={styles.actionBtn}
          >
            <Box bgcolor="primary.main" className="icon">
              <IconDetailSvg />
            </Box>
            整体師詳細 を見る
          </Link>
        </>
      );
    }
    if (data.status === ReservationStatus.DONE) {
      return (
        <>
          <Link
            href={`/manipulator/${data.manipulatorInfo.manipulatorId}`}
            sx={styles.actionBtn}
          >
            <Box bgcolor="primary.main" className="icon">
              <IconDetailSvg />
            </Box>
            整体師詳細 を見る
          </Link>
        </>
      );
    }
    return null;
  };

  return (
    <Box sx={styles.reservationCardWrapper}>
      <Box
        sx={styles.cardHeader}
        data-active={data.status === ReservationStatus.RESERVED}
      >
        <Typography color="white" className="manipulative-info">
          {data.manipulatorInfo.name} / {data.salonInfo.name}
        </Typography>
        <Typography color="graySolid" className="reservation-status">
          {RESERVATION_STATUS_TEXT[data.status]}
        </Typography>
        <Image
          src="/icons/default-avatar.svg"
          alt="Manipulator avatar"
          width={52}
          height={52}
          className="manipulator-avatar"
        />
      </Box>
      <Stack
        direction={{ xs: 'column', tablet: 'row' }}
        padding="19px 30px 20px 20px"
        gap={28}
      >
        <Stack flex="1 1 100%">
          <Typography color="black" fontWeight="bold">
            ご予約日
          </Typography>
          <Typography>
            {startTimeDay.format('YYYY/MM/DD（ddd）')}
            {`${startTimeDay.format('HH:mm')}～${endTimeDay.format('HH:mm')}`}
          </Typography>
          <Divider sx={{ my: 10 }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Typography color="black" fontWeight="bold">
              {menuInfo.name} {menuInfo.estimatedTime}分
            </Typography>
            <NumericFormat
              value={menuInfo.price}
              thousandSeparator=","
              suffix="円"
              displayType="text"
              renderText={(value) => (
                <Typography color="black">{value}</Typography>
              )}
            />
          </Stack>

          {!!data.ticketUsed && (
            <>
              <Divider sx={{ my: 10 }} />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Typography color="black" fontWeight="bold">
                  回数券
                </Typography>
                <Typography color="black">
                  {data.ticketUsed ? `${data.ticketUsed}回使用` : '-'}
                </Typography>
              </Stack>
            </>
          )}

          {!!data.couponDiscount && (
            <>
              <Divider sx={{ my: 10 }} />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Typography color="black" fontWeight="bold">
                  クーポン
                </Typography>
                <NumericFormat
                  value={data.couponDiscount}
                  thousandSeparator=","
                  suffix="円"
                  displayType="text"
                  renderText={(value) => (
                    <Typography color="red">{`- ${value}`}</Typography>
                  )}
                />
              </Stack>
            </>
          )}

          {data.status !== ReservationStatus.FREE_CANCELED && (
            <>
              <Divider sx={{ my: 10 }} />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
                flexShrink={1}
              >
                <Typography color="black" fontWeight="bold">
                  お支払い金額予定
                </Typography>
                <NumericFormat
                  value={totalCash}
                  thousandSeparator=","
                  displayType="text"
                  renderText={(value) => (
                    <Typography color="black" fontSize={26} fontWeight="bold">
                      {value}
                      <span style={{ fontSize: 16 }}>円</span>
                    </Typography>
                  )}
                />
              </Stack>
            </>
          )}
          {/* {data.status === ReservationStatus.RESERVED && (
            <>
              <Divider sx={{ my: 10 }} />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Typography color="black" fontWeight="bold">
                  キャンセル料発生日
                </Typography>
                <Typography color="black" fontSize={14}>
                  {startTimeDay.add(-3, 'day').format('YYYY/MM/DD（ddd）')}
                </Typography>
              </Stack>
            </>
          )} */}
        </Stack>
        <Stack
          flex={{ xs: 'auto', tablet: '0 0 150px' }}
          alignItems="center"
          gap={20}
        >
          {renderActions()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ReservationCard;
