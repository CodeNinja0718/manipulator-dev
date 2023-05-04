import { yupResolver } from '@hookform/resolvers/yup';
import IconPayment from '@icons/icon_payment.svg';
import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import AddCardFields from 'components/Card/AddCardFields';
import type { AddCardFormValues } from 'components/Card/AddCardFields/schema';
import schema from 'components/Card/AddCardFields/schema';
import { useFetch, useUser } from 'hooks';
import isEmpty from 'lodash/isEmpty';
import type { ICardItem } from 'models/card/interface';
import cardQuery from 'models/card/query';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Helper from 'utils/helpers';

import styles from './styles';

const CardSelect = () => {
  const { data: currentUser, isFetched } = useUser();

  const { data: cardList, isLoading: isLoadingCard } = useFetch<{
    items: ICardItem[];
  }>({
    ...cardQuery.cardList,
    enabled: !!currentUser,
  });
  const [payment, setPayment] = useState<string | undefined>(undefined);

  const {
    control,
    getValues,
    reset,
    formState: { isValid },
  } = useForm<AddCardFormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (!isEmpty(cardList?.items)) {
      setPayment(cardList?.items[0]?.id);
    }
  }, [cardList?.items]);

  const handleChangePayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(event.target.value);
  };

  return (
    <Stack mt={42}>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} mb={24}>
        <SvgIcon
          component={IconPayment}
          viewBox="0 0 46 33"
          sx={{ width: 32, height: 'auto' }}
        />
        <Typography
          fontSize={18}
          fontWeight={'bold'}
          ml={8}
          color={'secondary.main'}
        >
          支払い方法
        </Typography>
      </Box>
      {isEmpty(cardList?.items) && !isLoadingCard ? (
        <>
          <Image
            src="/images/card_brand.webp"
            alt="Card support"
            width={260}
            height={31}
          />
          <Typography color="black" sx={styles.paymentNote}>
            <span>
              ご予約時に与信枠（お支払い枠）を確保し、施術後に決済が行われます。
            </span>
            <br />
            ※当日の金額変更も可能です。
          </Typography>
          <AddCardFields control={control} />
          <Typography>
            ※セキュリティコードとは裏面の署名欄に印字されている3桁の番号のことです
          </Typography>
        </>
      ) : (
        <RadioGroup
          sx={styles.cardListWrapper}
          value={payment}
          onChange={handleChangePayment}
        >
          {cardList?.items.map((item) => (
            <Stack
              direction="row"
              alignItems="center"
              className="card-info"
              data-selected={item.id === payment}
              key={item.id}
              component="label"
            >
              <Radio
                value={item.id}
                checked={item.id === payment}
                sx={styles.radioBtn}
              />
              <Stack
                ml={8}
                sx={{ width: '100%' }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Typography>
                  {item?.details?.brand.toUpperCase()}
                  &nbsp;&nbsp;&nbsp;
                  {Helper.formatCardNumberText(item?.details?.lastNumber)}
                </Typography>
                <Typography fontSize={14}>
                  有効期限：{item?.details?.expireMonth}/
                  {item?.details?.expireYear}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </RadioGroup>
      )}
    </Stack>
  );
};

export default CardSelect;
