import ArrowRight from '@icons/arrow-right.svg';
import { Box, Button, RadioGroup, Stack, Typography } from '@mui/material';
import { useFetch } from 'hooks';
import isEmpty from 'lodash/isEmpty';
import type { IReservationMenu, ITicket } from 'models/manipulator/interface';
import type { ITicketOfMenu } from 'models/ticket/interface';
import ticketQuery from 'models/ticket/query';
import { useMemo, useState } from 'react';

import DefaultMenu from './components/DefaultMenu';
import TicketMenu from './components/TicketMenu';
import styles from './styles';

interface BookingMenuSelectionProps {
  initialMenu: string;
  menus: IReservationMenu[];
  onSubmit: (values: Record<string, unknown>) => void;
  onSetTicketMenu: (values: ITicket | any) => void;
  ticketMenu: ITicket | any;
}

const BookingMenuSelection: React.FC<BookingMenuSelectionProps> = ({
  initialMenu,
  menus,
  onSubmit,
  onSetTicketMenu,
  ticketMenu,
}) => {
  const [menuId, setMenuId] = useState(initialMenu);
  const selectedMenu = useMemo(
    () =>
      menus.filter(
        (menu) => menu._id === menuId || menu?.ticket?.id === menuId,
      ),
    [menuId, menus],
  );

  const { data } = useFetch<ITicketOfMenu>(
    ticketQuery.getInfoOfTicket(
      selectedMenu?.[0]?.createdById,
      selectedMenu?.[0]?._id,
    ),
  );

  const handleSelectMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const ticketMenuData = menus.filter(
      (menu) => menu?.ticket?.id === value && menu?._id !== value,
    );
    const currentTicketMenu: IReservationMenu | any = ticketMenuData?.[0] || {};
    onSetTicketMenu(
      isEmpty(currentTicketMenu)
        ? currentTicketMenu
        : {
            ...currentTicketMenu,
            ticket: {
              ...currentTicketMenu?.ticket,
              availableCount: data?.ticket?.availableCount,
              expiredAt: data?.ticket?.expiredAt,
              manipulatorNameKana: data?.manipulatorNameKana,
              salonNameKana: data?.salonNameKana,
            },
          },
    );
    setMenuId(e.target.value);
  };

  const handleSelectedTicketOfMenu = (value: number | any) => {
    if (!isEmpty(ticketMenu)) {
      onSetTicketMenu({
        ...ticketMenu,
        ticket: {
          ...ticketMenu?.ticket,
          numberOfSelectedTicket: value,
        },
      });
    }
  };

  const menuList = useMemo(() => {
    let list = menus;

    if (!isEmpty(data)) {
      list = list.map((item) => {
        let temp = { ...item };
        if (temp._id === selectedMenu?.[0]?._id) {
          temp = {
            ...temp,
            ticket: {
              ...temp.ticket,
              availableCount: data?.ticket?.availableCount,
              expiredAt: data?.ticket?.expiredAt,
              manipulatorNameKana: data?.manipulatorNameKana,
              salonNameKana: data?.salonNameKana,
            },
          };
        }
        return temp;
      });
    }
    return list;
  }, [menus, data, selectedMenu]);

  return (
    <Stack sx={styles.bookingMenuWrapper}>
      <Typography color="secondary" fontSize={18} fontWeight="bold">
        メニューを選択してください
      </Typography>
      <RadioGroup value={menuId} onChange={handleSelectMenu}>
        {menuList.map((menu) => {
          return (
            <Box key={menu._id} sx={styles.menuItemWrapper}>
              {menu.ticket !== null ? (
                <TicketMenu
                  {...menu}
                  onSelectedTicketOfMenu={handleSelectedTicketOfMenu}
                />
              ) : (
                <DefaultMenu {...menu} />
              )}
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
