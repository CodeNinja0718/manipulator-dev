import dayjs from 'dayjs';
import { Regex } from 'utils/const';
import type { InferType } from 'yup';
import { number, object, string } from 'yup';

const schema = object({
  name: string().required(),
  nameKana: string().required().matches(Regex.KATAKANA, 'Katakana invalid'),
  email: string().required().matches(Regex.EMAIL, 'Email invalid'),
  phone: string().required().matches(Regex.PHONE, 'Phone number is not valid'),
  birthday: string()
    .nullable()
    .test('validDate', 'Birthday invalid', (value) => {
      return dayjs(value).isValid() && !dayjs(value).isAfter(dayjs());
    })
    .required(),
  gender: number()
    .nullable()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required(),
});

export default schema;
export type CompleteProfileFormValues = InferType<typeof schema>;
