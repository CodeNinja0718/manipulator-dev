import ArrowRight from '@icons/arrow-right.svg';
import { Button, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

interface SlotConfirmContentProps {
  isGuest: boolean;
  startTime: string;
  endTime: string;
  onConfirm: () => void;
}

const SlotConfirmContent: React.FC<SlotConfirmContentProps> = ({
  isGuest,
  startTime,
  endTime,
  onConfirm,
}) => {
  const router = useRouter();
  const startTimeDayjs = dayjs(startTime).tz();
  const endTimeDayjs = dayjs(endTime).tz();

  return (
    <>
      <Stack alignItems="center" bgcolor="cream" padding="15px 0 11px">
        <Typography color="black" fontWeight="bold" fontSize={20}>
          {startTimeDayjs.format('YYYY/MM/DD（ddd）')}
        </Typography>
        <Typography color="black" fontWeight="bold" fontSize={20}>
          {`${startTimeDayjs.format('HH:mm')}～${endTimeDayjs.format('HH:mm')}`}
        </Typography>
        <Typography color="black" mt={8}>
          でよろしいですか？
        </Typography>
      </Stack>
      {isGuest && (
        <Stack alignItems="center" padding="27px 0 40px">
          <Typography color="black" fontWeight="bold" mb={7}>
            はじめての方はこちら
          </Typography>
          <Button
            fullWidth
            variant="contained"
            size="small"
            endIcon={<ArrowRight />}
            sx={{
              maxWidth: 250,
            }}
            onClick={() => {
              onConfirm();
              router.push('/register');
            }}
          >
            会員登録して予約
          </Button>
          <Typography color="black" fontWeight="bold" mb={7} mt={20}>
            会員の方はこちら
          </Typography>
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{
              maxWidth: 250,
            }}
            endIcon={<ArrowRight />}
            onClick={() => {
              onConfirm();
              router.push('/login');
            }}
          >
            ログインして予約確認へ
          </Button>
        </Stack>
      )}
    </>
  );
};

export default SlotConfirmContent;
