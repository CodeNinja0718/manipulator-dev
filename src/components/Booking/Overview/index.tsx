import ArrowRight from '@icons/arrow-right.svg';
import IconTag from '@icons/icon_reservation.svg';
import { Button, Divider, Stack, Typography } from '@mui/material';
import ManipulatorSummaryInfo from 'components/Manipulator/SummaryInfo';
import dayjs from 'dayjs';
import type {
  IManipulator,
  IReservationMenu,
} from 'models/manipulator/interface';
import type { CreateReservationPayload } from 'models/reservation/interface';
import type { ITicketTime } from 'models/ticket/interface';
import Link from 'next/link';
import { NumericFormat } from 'react-number-format';

import styles from './styles';

interface BookingOverviewProps {
  bookingDetail?: CreateReservationPayload & {
    menu?: IReservationMenu;
  };
  manipulatorDetail?: IManipulator;
  ticketTimeList: ITicketTime[];
}

const BookingOverview: React.FC<BookingOverviewProps> = ({
  manipulatorDetail,
  bookingDetail,
  ticketTimeList,
}) => {
  const startTimeDay = dayjs(bookingDetail?.startTime).tz();
  const endTimeDay = dayjs(bookingDetail?.endTime).tz();

  const numberOfSessions = bookingDetail?.ticket?.numberOfSelectedTicket || 1;
  const bookingPrice = bookingDetail?.ticket
    ? bookingDetail.ticket.price
    : bookingDetail?.menu?.price || 0;
  const totalPrice = bookingDetail?.ticket
    ? 0
    : bookingPrice * numberOfSessions - (bookingDetail?.coupon?.amount || 0);

  const renderTicketData = (() => {
    if (!bookingDetail?.ticket) {
      return <></>;
    }

    return (
      <Stack>
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
          <Typography color={'black'} fontWeight="bold">
            {`${bookingDetail?.ticket?.numberOfSelectedTicket || 1}回使用`}
          </Typography>
        </Stack>
      </Stack>
    );
  })();

  const renderCouponData = (() => {
    if (!bookingDetail?.coupon) {
      return <></>;
    }

    return (
      <Stack>
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
            value={bookingDetail?.coupon?.amount}
            thousandSeparator=","
            suffix="円"
            displayType="text"
            renderText={(value) => (
              <Typography color="red" fontWeight="bold">
                {`- ${value}`}
              </Typography>
            )}
          />
        </Stack>
      </Stack>
    );
  })();

  return (
    <Stack sx={styles.bookingOverviewWrapper} alignItems="center">
      <Typography variant="title" mb={35}>
        予約完了
      </Typography>
      <Typography fontSize={18} mb={35}>
        ご来院、お待ちしております。
      </Typography>
      <Stack
        gap={{ xs: 24, tablet: 30 }}
        direction="row"
        sx={styles.bookingDetailWrapper}
        alignItems="start"
      >
        <ManipulatorSummaryInfo
          data={manipulatorDetail}
          className="manipulator-info"
          hideFavoriteBtn
          hideRating
        />
        <Stack direction="row" className="booking-info" gap={16}>
          <IconTag />
          <Stack width="100%">
            <Typography color="black" fontWeight="bold">
              ご予約日
            </Typography>
            {ticketTimeList.length ? (
              ticketTimeList.map((ticket, idx) => (
                <Typography key={`ticket-time-${idx}`}>
                  {startTimeDay.format('YYYY/MM/DD（ddd）')}
                  {`${ticket.startTime.format(
                    'HH:mm',
                  )}～${ticket.endTime.format('HH:mm')}`}
                </Typography>
              ))
            ) : (
              <Typography>
                {startTimeDay.format('YYYY/MM/DD（ddd）')}
                {`${startTimeDay.format('HH:mm')}～${endTimeDay.format(
                  'HH:mm',
                )}`}
              </Typography>
            )}
            <Divider sx={{ my: 10 }} />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Typography color="black" fontWeight="bold">
                {bookingDetail?.menu?.name} {bookingDetail?.menu?.estimatedTime}
                分
              </Typography>
              <NumericFormat
                value={bookingPrice}
                thousandSeparator=","
                suffix="円"
                displayType="text"
                renderText={(value) => (
                  <Typography color="black" fontWeight="bold">
                    {value}
                  </Typography>
                )}
              />
            </Stack>
            {/* Render Coupon Infomations */}
            {renderTicketData}
            {renderCouponData}
            <Divider sx={{ my: 10 }} />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Typography color="black" fontWeight="bold">
                お支払い金額予定
              </Typography>
              <NumericFormat
                value={totalPrice}
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
            {/* <Divider sx={{ my: 10 }} />
            <Typography color="black" fontWeight="bold">
              キャンセル料発生日
            </Typography>
            <Typography>
              {startTimeDay.add(-3, 'day').format('YYYY/MM/DD（ddd）')}
            </Typography> */}
          </Stack>
        </Stack>
      </Stack>
      <Button
        fullWidth
        variant="contained"
        endIcon={<ArrowRight />}
        sx={styles.submitBtn}
        component={Link}
        href="/my-page/reservations"
      >
        予約履歴を見る
      </Button>
    </Stack>
  );
};

export default BookingOverview;
