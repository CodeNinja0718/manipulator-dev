import ArrowRight from '@icons/arrow-right.svg';
import CouponSvg from '@icons/icon_coupon.svg';
import IconReloadSvg from '@icons/icon_sync.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import type { ICoupon } from 'models/discount/interface';

import CouponPreview from './CouponPreview';
import styles from './styles';

interface ICouponType {
  coupon?: ICoupon;
  onSelectCoupon: (value: boolean) => void;
  onSetCouponSelect: (code: string | any) => void;
}

const CouponType = ({
  coupon,
  onSelectCoupon,
  onSetCouponSelect,
}: ICouponType) => {
  const handleSelectCoupon = () => {
    if (onSelectCoupon) {
      onSelectCoupon(true);
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Stack
        component="label"
        width="100%"
        sx={{
          cursor: 'pointer',
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
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
          </Box>
          {!!coupon && (
            <Box>
              <Button
                size="small"
                variant="outlined"
                sx={styles.button}
                startIcon={<SvgIcon component={IconReloadSvg} inheritViewBox />}
                onClick={handleSelectCoupon}
              >
                <span>変更する</span>
              </Button>
            </Box>
          )}
        </Box>
        <Box sx={styles.couponBox}>
          {coupon ? (
            <CouponPreview
              data={coupon}
              onSetCouponSelect={onSetCouponSelect}
            />
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
    </Box>
  );
};

export default CouponType;
