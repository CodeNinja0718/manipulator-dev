import { Box, Radio, Stack, Typography } from '@mui/material';
import { NumberInput } from 'components/NumberInput';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';
import type { IReservationMenu } from 'models/manipulator/interface';
import React, { useMemo } from 'react';
import { NumericFormat } from 'react-number-format';
import { MENU_TYPES, MENU_TYPES_KEYS } from 'utils/const';

import styles from './styles';

interface IMenuSelection extends IReservationMenu {
  onSelectedTicketOfMenu: (value: number | any) => void;
}

const TicketMenu: React.FC<IMenuSelection> = ({
  _id,
  name,
  price,
  menuTypes,
  ticket,
  timeDisplay,
  estimatedTime,
  onSelectedTicketOfMenu,
}) => {
  const handleGetLabel = (item: string) => {
    if (isEmpty(item)) return false;

    const value = MENU_TYPES.filter((el) => el.value === item)
      .map((el) => el.label)
      .filter(Boolean);

    if (isEmpty(value)) return false;
    return head(value);
  };

  const handleGetPriceTicket = (item: string) => {
    const priceValue =
      MENU_TYPES_KEYS.COUPON === item ? ticket?.price || 0 : price;
    return priceValue;
  };

  const menuTypeList = useMemo(() => menuTypes.sort().reverse(), [menuTypes]);
  const isTicket = (el: string) => {
    return MENU_TYPES_KEYS.COUPON === el;
  };

  const handleChangeTicket = (e: number | any) => {
    onSelectedTicketOfMenu(e);
  };

  return (
    <Stack direction="row" alignItems="center">
      <Stack
        direction="column"
        alignItems="flex-start"
        flexGrow={1}
        justifyContent="space-between"
      >
        <Stack direction={'row'} spacing={12}>
          <Typography
            component="p"
            fontSize={16}
            fontWeight={'bold'}
            color={'black'}
          >
            {name}
          </Typography>
          {!timeDisplay && (
            <Typography fontSize={16} fontWeight={'bold'} color={'black'}>
              {estimatedTime}分
            </Typography>
          )}
        </Stack>
        {!isEmpty(menuTypeList) ? (
          <Box width="100%" display="flex" flexDirection="column">
            {menuTypeList.map((item, index) => (
              <Box
                key={`menu-types-${_id}-${index}`}
                display="flex"
                flexDirection="row"
                alignItems="flex-start"
                sx={{
                  py: 11,
                  borderTop: isTicket(item) ? '2px dashed #cccccc' : '',
                }}
              >
                <Stack
                  component="label"
                  width="100%"
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Radio
                      sx={{
                        p: 11,
                      }}
                      value={isTicket(item) ? ticket?.id : _id}
                    />
                    <Typography color="black" fontWeight="bold">
                      {handleGetLabel(item)}
                    </Typography>
                  </Box>
                  {isTicket(item) ? (
                    <Stack
                      direction={'row'}
                      spacing={10}
                      pl={11}
                      alignItems={'center'}
                    >
                      <Box sx={styles.ticketLeft}>
                        <Typography sx={styles.ticketLeftText}>
                          残り
                          <Typography
                            component={'span'}
                            sx={styles.ticketLeftNumber}
                          >
                            {ticket?.availableCount ||
                              ticket?.numberOfTicket ||
                              0}
                          </Typography>
                          回
                        </Typography>
                      </Box>
                      <Typography sx={styles.text} pl={5}>
                        使用する
                      </Typography>
                      <NumberInput
                        sx={styles.numberInput}
                        onChange={handleChangeTicket}
                        required
                        inputProps={{ inputMode: 'numeric', pattern: '[1-9]*' }}
                        value={ticket?.numberOfSelectedTicket || 1}
                        min={1}
                        max={
                          ticket?.availableCount || ticket?.numberOfTicket || 1
                        }
                      />
                      <Typography sx={styles.text}>回</Typography>
                    </Stack>
                  ) : (
                    <></>
                  )}
                </Stack>

                <Typography
                  color="black"
                  whiteSpace="nowrap"
                  fontWeight="bold"
                  py={11}
                >
                  <NumericFormat
                    value={handleGetPriceTicket(item)}
                    thousandSeparator=","
                    suffix={MENU_TYPES_KEYS.COUPON === item ? '円 / 1回' : '円'}
                    displayType="text"
                  />
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <></>
        )}
      </Stack>
    </Stack>
  );
};

export default TicketMenu;
