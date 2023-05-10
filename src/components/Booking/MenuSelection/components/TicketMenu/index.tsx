import ArrowRight from '@icons/arrow-right.svg';
import {
  Box,
  Button,
  CircularProgress,
  Radio,
  Stack,
  Typography,
} from '@mui/material';
import { NumberInput } from 'components/NumberInput';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';
import type { IReservationMenu } from 'models/manipulator/interface';
import React, { useMemo, useRef } from 'react';
import { NumericFormat } from 'react-number-format';
import { MENU_TYPES, MENU_TYPES_KEYS } from 'utils/const';

import styles from './styles';

interface IMenuSelection extends IReservationMenu {
  onAddTicket: () => void;
  onSelectedTicketOfMenu: (value: number | any) => void;
  selectedMenu: IReservationMenu | any;
  isSelectedMenu: boolean;
  parentMenuID: string;
  availableCount: number;
  fetchStatus: string;
}

const TicketMenu: React.FC<IMenuSelection> = ({
  _id,
  name,
  price,
  menuTypes,
  ticket,
  timeDisplay,
  estimatedTime,
  onAddTicket,
  onSelectedTicketOfMenu,
  selectedMenu,
  isSelectedMenu,
  parentMenuID,
  availableCount,
  fetchStatus,
}) => {
  const numberOfTicketRef = useRef<HTMLInputElement>(null);
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

  const handleChangeTicket = () => {
    if (numberOfTicketRef?.current) {
      const children: any = numberOfTicketRef?.current?.firstChild;
      const numberOfSelectedTicket: number | any = children?.value || 1;
      onSelectedTicketOfMenu({
        ...ticket,
        numberOfSelectedTicket: Number(numberOfSelectedTicket),
      });
    }
  };

  const handleChange = (isHaveTicket: boolean) => {
    if (numberOfTicketRef?.current) {
      const children: any = numberOfTicketRef?.current?.firstChild;
      const numberOfSelectedTicket: number | any = children?.value || 1;
      const numberOfSelectedTicketData = isHaveTicket
        ? {
            numberOfSelectedTicket: Number(numberOfSelectedTicket),
          }
        : {};
      onSelectedTicketOfMenu({
        ...ticket,
        ...numberOfSelectedTicketData,
      });
    }
  };

  const isShowAvailableCount =
    availableCount === 0 &&
    isSelectedMenu &&
    selectedMenu?._id === parentMenuID;

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
                  borderTop:
                    isTicket(item) && price ? '2px dashed #cccccc' : '',
                }}
              >
                <Stack
                  component="label"
                  width="100%"
                  sx={{
                    cursor: 'pointer',
                  }}
                  onChange={() => handleChange(isTicket(item))}
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
                    <Stack direction={'column'} alignItems={'flex-start'}>
                      {selectedMenu?._id === parentMenuID &&
                      availableCount === 0 ? (
                        <></>
                      ) : (
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
                                {selectedMenu?._id === parentMenuID
                                  ? availableCount
                                  : ticket?.numberOfTicket || 0}
                              </Typography>
                              回
                            </Typography>
                          </Box>
                          <Typography sx={styles.text} pl={5}>
                            使用する
                          </Typography>
                          <NumberInput
                            ref={numberOfTicketRef}
                            sx={styles.numberInput}
                            onClick={handleChangeTicket}
                            required
                            inputProps={{
                              inputMode: 'numeric',
                              pattern: '[1-9]*',
                            }}
                            value={ticket?.numberOfSelectedTicket || 1}
                            min={1}
                            max={ticket?.numberOfTicket || 1}
                          />
                          <Typography sx={styles.text}>回</Typography>
                        </Stack>
                      )}
                      {fetchStatus.indexOf('fetching') > -1
                        ? selectedMenu?._id === parentMenuID && (
                            <CircularProgress
                              size="small"
                              sx={styles.loading}
                            />
                          )
                        : isShowAvailableCount && (
                            <Button
                              size="medium"
                              color="primary"
                              endIcon={<ArrowRight />}
                              variant="contained"
                              sx={styles.addTicketBtn}
                              onClick={onAddTicket}
                            >
                              回数券購入へ進む
                            </Button>
                          )}
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
