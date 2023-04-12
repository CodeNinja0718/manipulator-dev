import { Radio, Stack, Typography } from '@mui/material';
import type { IReservationMenu } from 'models/manipulator/interface';
import { NumericFormat } from 'react-number-format';

const DefaultMenu: React.FC<IReservationMenu> = ({ _id, name, price }) => {
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
        <Typography color="black" fontWeight="bold">
          {name}
        </Typography>
        <Typography color="black" fontWeight="bold">
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
