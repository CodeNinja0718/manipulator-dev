import ArrowRight from '@icons/arrow-right.svg';
import { Box, Button, RadioGroup, Stack, Typography } from '@mui/material';
import { useFetch } from 'hooks';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
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
  onAddTicket: (ticketId: string) => void;
}

const BookingMenuSelection: React.FC<BookingMenuSelectionProps> = ({
  initialMenu,
  menus,
  onSubmit,
  onSetTicketMenu,
  onAddTicket,
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

    setMenuId(
      numberOfSelectedTicket || isEmpty(currentTicketMenu)
        ? id
        : currentTicketMenu?._id,
    );
  };

  const handleSelectedTicketOfMenu = (value: number | any) => {
    handleChangeMenu(value?.id, value?.numberOfSelectedTicket);
  };

  const handleSelectMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeMenu(e.target.value);
  };

  const isTicket = !isEmpty(selectedMenu?.[0]?.ticket);
  const { data, fetchStatus } = useFetch<ITicketOfMenu>(
    ticketQuery.getInfoOfTicket(
      selectedMenu?.[0]?.createdById,
      selectedMenu?.[0]?._id,
      isTicket,
    ),
  );

  const menuList = useMemo(() => {
    return menus;
  }, [menus]);

  const availableCount = data?.ticket?.availableCount ?? 0;
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
                  parentMenuID={menu._id}
                  isSelectedMenu={isTicket}
                  selectedMenu={{
                    ...data,
                    _id: selectedMenu?.[0]?._id || null,
                  }}
                  availableCount={availableCount}
                  onAddTicket={() => onAddTicket(menu?.ticket?.id || '')}
                  onSelectedTicketOfMenu={handleSelectedTicketOfMenu}
                  fetchStatus={fetchStatus}
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
