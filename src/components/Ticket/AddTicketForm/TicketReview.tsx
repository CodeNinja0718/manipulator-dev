import IconTicket from '@icons/icon_ticket.svg';
import { Box, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import dayjs from 'dayjs';
import type { IManipulator } from 'models/manipulator/interface';
import type { IAvailableTicket } from 'models/ticket/interface';
import React from 'react';
import { DateFormat } from 'utils/const';
import Helper from 'utils/helpers';

interface TicketReviewProps {
  ticketData: IAvailableTicket | undefined;
  manipulator: Partial<IManipulator>;
}

const TicketReview = ({ ticketData: data, manipulator }: TicketReviewProps) => {
  if (!data) {
    return null;
  }

  const estimatedExpiredDate = dayjs()
    .tz()
    .add(data.expiryMonth * 30, 'day')
    .format(DateFormat.YEAR_MONTH_DATE);

  const totalPrice = (data.ticketPrice || 0) * (data.numberOfTickets || 1);

  return (
    <Stack
      mt={48}
      display={'flex'}
      alignSelf={'stretch'}
      padding={20}
      bgcolor={'cream'}
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'flex-end'}
        mb={24}
      >
        <SvgIcon
          component={IconTicket}
          viewBox="0 0 51 47"
          sx={{ width: 32, height: 'auto' }}
        />
        <Typography
          fontSize={18}
          fontWeight={'bold'}
          ml={8}
          color={'secondary.main'}
        >
          回数券
        </Typography>
      </Box>
      <Box
        display={'flex'}
        bgcolor={'white'}
        px={22}
        py={16}
        flexDirection={'column'}
      >
        <Typography fontSize={14} fontWeight={'bold'} mb={8}>
          {`${manipulator?.name || ''} / ${data.salonName}`}
        </Typography>
        <Typography fontSize={14} fontWeight={'bold'} mb={12}>
          {`${data.ticketName}（目安時間：${data.estimatedTime}分）`}
        </Typography>
        <Typography fontSize={16} fontWeight={'bold'} mb={20} color={'red'}>
          有効期限：{estimatedExpiredDate}
        </Typography>
        <Divider />
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={8}
          alignSelf={'flex-end'}
          mt={16}
        >
          <Typography fontSize={16} fontWeight={'bold'}>
            金額
          </Typography>
          <Typography fontSize={26} fontWeight={'bold'}>
            {Helper.addComma(totalPrice)}
            <Typography component={'span'} fontSize={16}>
              円
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default TicketReview;
