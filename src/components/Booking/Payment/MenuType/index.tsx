import IconReloadSvg from '@icons/icon_sync.svg';
import TicketSvg from '@icons/icon_ticket.svg';
import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import dayjs from 'dayjs';
import isEmpty from 'lodash/isEmpty';
import type { ITicket } from 'models/manipulator/interface';

import styles from './styles';

interface IMenuType {
  ticketMenu: ITicket | any;
}

const MenuType = ({ ticketMenu }: IMenuType) => {
  const handleExistTicket = () => {
    const numberTicket =
      ticketMenu?.ticket?.availableCount ||
      ticketMenu?.ticket?.numberOfTicket ||
      0;
    const numberOfSelectedTicket =
      ticketMenu?.ticket?.numberOfSelectedTicket || 0;

    return numberTicket - numberOfSelectedTicket;
  };

  const isHaveTicket = !isEmpty(ticketMenu?.ticket);

  return (
    <Box sx={styles.wrapper}>
      {isHaveTicket ? (
        <Stack
          component="label"
          width="100%"
          sx={{
            cursor: 'pointer',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={10}
          >
            <Box display="flex" alignItems="center">
              <TicketSvg width={25} height={25} />
              <Typography
                color="secondary"
                fontSize={18}
                fontWeight="bold"
                ml={13}
              >
                回数券
              </Typography>
              <Typography fontSize={14} fontWeight="bold" ml={16}>
                有効期限：
                {dayjs(ticketMenu?.ticket?.expiredAt).tz().format('YYYY/MM/DD')}
              </Typography>
            </Box>
            <Box>
              <Button
                size="small"
                variant="outlined"
                sx={styles.button}
                startIcon={<SvgIcon component={IconReloadSvg} inheritViewBox />}
              >
                <span>変更する</span>
              </Button>
            </Box>
          </Box>

          <Box sx={styles.ticketBox}>
            <Typography fontWeight="bold" fontSize={14} mb={11}>
              {ticketMenu?.ticket?.manipulatorNameKana} /{' '}
              {ticketMenu?.ticket?.salonNameKana}
            </Typography>
            <Typography fontWeight="bold" fontSize={16} mb={13}>
              整体
              {ticketMenu?.ticket?.availableCount ||
                ticketMenu?.ticket?.numberOfTicket}
              回コース（目安時間：
              {ticketMenu?.estimatedTime || 0}分）
            </Typography>

            <Box display="flex" alignItems="center" justifyContent="initial">
              <Box sx={styles.ticketLeft}>
                <Typography sx={styles.ticketLeftText}>
                  残り
                  <Typography component={'span'} sx={styles.ticketLeftNumber}>
                    {handleExistTicket()}
                  </Typography>
                  回
                </Typography>
              </Box>
              <Typography fontWeight="bold" fontSize={16} ml={17}>
                {ticketMenu?.ticket?.numberOfSelectedTicket || 0}回使用
              </Typography>
            </Box>
          </Box>
        </Stack>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default MenuType;
