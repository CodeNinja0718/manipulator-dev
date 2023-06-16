import { Box, Radio, Stack, Typography } from '@mui/material';
import type { IReservationMenu } from 'models/manipulator/interface';
import { NumericFormat } from 'react-number-format';

const DefaultMenu: React.FC<IReservationMenu> = ({
  _id,
  name,
  price,
  estimatedTime,
  timeDisplay,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      component="label"
      sx={{
        cursor: 'pointer',
      }}
    >
      <Radio value={_id} />
      <Stack
        direction="row"
        alignItems="center"
        flexGrow={1}
        justifyContent="space-between"
      >
        <Box>
          <Typography component="span" fontWeight={'bold'} color={'black'}>
            {name}
          </Typography>
          {!timeDisplay && (
            <Typography
              component={'span'}
              fontWeight={'bold'}
              color={'black'}
              ml={12}
              whiteSpace={'nowrap'}
            >
              {estimatedTime}分
            </Typography>
          )}
        </Box>
        <Typography color="black" fontWeight="bold" minWidth={70}>
          <NumericFormat
            value={price}
            thousandSeparator=","
            suffix="円"
            displayType="text"
          />
        </Typography>
      </Stack>
    </Stack>
  );
};
export default DefaultMenu;
