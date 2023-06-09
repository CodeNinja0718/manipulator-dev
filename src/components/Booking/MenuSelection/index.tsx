import ArrowRight from '@icons/arrow-right.svg';
import { Box, Button, RadioGroup, Stack, Typography } from '@mui/material';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import type { IReservationMenu, ITicket } from 'models/manipulator/interface';
import { useMemo, useState } from 'react';

import DefaultMenu from './components/DefaultMenu';
import TicketMenu from './components/TicketMenu';
import styles from './styles';

interface BookingMenuSelectionProps {
  initialMenu: string;
  ticketMenu: ITicket | any;
  menus: IReservationMenu[];
  onSubmit: (values: Record<string, unknown>) => void;
  onSetTicketMenu: (values: ITicket | any) => void;
  onAddTicket: (ticketId: string) => void;
  currentUser?: any;
}

const BookingMenuSelection: React.FC<BookingMenuSelectionProps> = ({
  initialMenu,
  menus,
  onSubmit,
  onSetTicketMenu,
  onAddTicket,
  ticketMenu,
  currentUser,
}) => {
  const [menuId, setMenuId] = useState(initialMenu);
  const selectedMenu = useMemo(
    () =>
      menus.filter(
        (menu) => menu._id === menuId || menu?.ticket?.id === menuId,
      ),
    [menuId, menus],
  );

  const handleChangeMenu = (id: string, numberOfSelectedTicket?: number) => {
    const ticketMenuData = menus.filter(
      (menu) => menu?.ticket?.id === id && menu?._id !== id,
    );
    const currentTicketMenu: IReservationMenu | any = ticketMenuData?.[0] || {};
    onSetTicketMenu(
      isEmpty(currentTicketMenu)
        ? currentTicketMenu
        : {
            ...currentTicketMenu,
            ticket: numberOfSelectedTicket
              ? {
                  ...currentTicketMenu?.ticket,
                  numberOfSelectedTicket,
                }
              : {
                  ...omit({ ...currentTicketMenu?.ticket }, [
                    'numberOfSelectedTicket',
                  ]),
                },
          },
    );

    setMenuId(id);
  };

  const handleSelectedTicketOfMenu = (value: number | any) => {
    if (value?.numberOfSelectedTicket) {
      handleChangeMenu(value?.id, value?.numberOfSelectedTicket);
    }
  };

  const handleSelectMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeMenu(e.target.value);
  };

  const isTicket =
    !isEmpty(selectedMenu?.[0]?.ticket) &&
    menuId === selectedMenu?.[0]?.ticket?.id;

  const menuList = useMemo(() => {
    return menus;
  }, [menus]);

  const availableCount = ticketMenu?.ticket?.numberOfSelectedTicket ?? 0;
  const isNotAvailableTicket =
    availableCount === 0 &&
    isTicket &&
    selectedMenu?.[0]?.ticket?.id === menuId;

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
                  selectedMenu={selectedMenu?.[0]?.ticket?.id}
                  onAddTicket={() => onAddTicket(menu?.ticket?.id || '')}
                  onSelectedTicketOfMenu={handleSelectedTicketOfMenu}
                  currentUser={currentUser}
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
        disabled={isNotAvailableTicket || isEmpty(selectedMenu)}
      >
        予約日時を選択する
      </Button>
    </Stack>
  );
};

export default BookingMenuSelection;
