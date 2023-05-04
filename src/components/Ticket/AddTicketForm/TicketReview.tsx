import IconTicket from '@icons/icon_ticket.svg';
import { Box, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';

const TicketReview = () => {
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
          整体師太郎 / 快適整体院
        </Typography>
        <Typography fontSize={14} fontWeight={'bold'} mb={12}>
          整体10回コース（目安時間：30分）
        </Typography>
        <Typography fontSize={16} fontWeight={'bold'} mb={20} color={'red'}>
          有効期限：2023/6/30
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
            50,000
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
