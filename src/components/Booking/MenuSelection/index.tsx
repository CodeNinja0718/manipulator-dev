import ArrowRight from '@icons/arrow-right.svg';
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import isEmpty from 'lodash/isEmpty';
import type { IReservationMenu } from 'models/manipulator/interface';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

import styles from './styles';

interface BookingMenuSelectionProps {
  initialMenu: string;
  menus: IReservationMenu[];
  onSubmit: (values: Record<string, unknown>) => void;
}

const BookingMenuSelection: React.FC<BookingMenuSelectionProps> = ({
  initialMenu,
  menus,
  onSubmit,
}) => {
  const [menuId, setMenuId] = useState(initialMenu);

  const handleSelectMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuId(e.target.value);
  };

  const selectedMenu = menus.filter((menu) => menu._id === menuId);

  return (
    <Stack sx={styles.bookingMenuWrapper}>
      <Typography color="secondary" fontSize={18} fontWeight="bold">
        メニューを選択してください
      </Typography>
      <RadioGroup value={menuId} onChange={handleSelectMenu}>
        {menus.map((menu) => {
          return (
            <Box key={menu._id} sx={styles.menuItemWrapper}>
              <Stack
                direction="row"
                alignItems="center"
                component="label"
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Radio value={menu._id} />
                <Stack
                  direction="row"
                  alignItems="center"
                  flexGrow={1}
                  justifyContent="space-between"
                >
                  <Typography color="black">{menu.name}</Typography>
                  <Typography color="black">
                    <NumericFormat
                      value={menu.price}
                      thousandSeparator=","
                      suffix="円"
                      displayType="text"
                    />
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </RadioGroup>
      <Typography color="black" fontSize={14} mt={20} mb={32}>
        ※当日、整体院でメニュー変更できます。
        <br />
        ※料金はメニュー変更・オプション追加によって変動する場合があります。
      </Typography>
      <Button
        fullWidth
        variant="contained"
        endIcon={<ArrowRight />}
        sx={styles.submitBtn}
        onClick={() => onSubmit({ menuId })}
        disabled={isEmpty(selectedMenu)}
      >
        予約日時を選択する
      </Button>
    </Stack>
  );
};

export default BookingMenuSelection;
