import ArrowRight from '@icons/arrow-right.svg';
import CouponSvg from '@icons/icon_coupon.svg';
import IconReloadSvg from '@icons/icon_sync.svg';
import TicketSvg from '@icons/icon_ticket.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import isEmpty from 'lodash/isEmpty';
import type { ICoupon } from 'models/discount/interface';
import type { ITicket } from 'models/manipulator/interface';

import CouponPreview from './CouponPreview';
import styles from './styles';

interface IMenuType {
  selectedMenuType: string;
  onSetSelectedMenuType: (value: string) => void;
  ticketMenu: ITicket | any;
  coupon?: ICoupon;
  onSelectCoupon?: () => void;
}

const MenuType = ({
  selectedMenuType,
  onSetSelectedMenuType,
  ticketMenu,
  coupon,
  onSelectCoupon,
}: IMenuType) => {
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSetSelectedMenuType(value);
  };
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

  const handleSelectCoupon = () => {
    onSetSelectedMenuType('coupon');
    if (onSelectCoupon) {
      onSelectCoupon();
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <RadioGroup onChange={handleSelect} value={selectedMenuType}>
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
                <Radio
                  sx={{
                    p: 11,
                  }}
                  value="ticket"
                />
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
                  {dayjs(ticketMenu?.ticket?.expiredAt)
                    .tz()
                    .format('YYYY/MM/DD')}
                </Typography>
              </Box>
              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  sx={styles.button}
                  startIcon={
                    <SvgIcon component={IconReloadSvg} inheritViewBox />
                  }
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

        <Stack
          component="label"
          width="100%"
          sx={{
            cursor: 'pointer',
            mt: isHaveTicket ? 17 : 0,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Radio
                sx={{
                  p: 11,
                }}
                value="coupon"
              />
              <CouponSvg width={25} height={25} />
              <Typography
                color="secondary"
                fontSize={18}
                fontWeight="bold"
                ml={13}
              >
                クーポン
              </Typography>
            </Box>
            {!!coupon && (
              <Box>
                <Button
                  size="small"
                  variant="outlined"
                  sx={styles.button}
                  startIcon={
                    <SvgIcon component={IconReloadSvg} inheritViewBox />
                  }
                  onClick={handleSelectCoupon}
                >
                  <span>変更する</span>
                </Button>
              </Box>
            )}
          </Box>
          <Box sx={styles.couponBox}>
            {coupon ? (
              <CouponPreview data={coupon} />
            ) : (
              <Stack
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                sx={{ width: '100%' }}
              >
                <LoadingButton
                  sx={styles.submitBtn}
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowRight />}
                  onClick={handleSelectCoupon}
                >
                  クーポン一覧を見る
                </LoadingButton>
              </Stack>
            )}
          </Box>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default MenuType;
