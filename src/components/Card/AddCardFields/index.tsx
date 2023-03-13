import { Stack } from '@mui/material';
import { MaskedField } from 'components/Form';
import type { Control } from 'react-hook-form';

import type { AddCardFormValues } from './schema';

interface AddCardFieldsProps {
  control: Control<AddCardFormValues>;
}

const AddCardFields: React.FC<AddCardFieldsProps> = ({ control }) => {
  return (
    <>
      <MaskedField
        label="カード番号"
        name="card_number"
        format="###################"
        control={control}
        inputProps={{
          placeholder: '1234567890123456',
        }}
      />
      <Stack direction="row" gap={11}>
        <MaskedField
          label="有効期限"
          name="card_expire"
          control={control}
          format="##/##"
          inputProps={{
            placeholder: 'MM/YY',
          }}
        />
        <MaskedField
          label="セキュリティコード"
          name="security_code"
          control={control}
          format="####"
          inputProps={{
            placeholder: '123',
          }}
        />
      </Stack>
    </>
  );
};

export default AddCardFields;
