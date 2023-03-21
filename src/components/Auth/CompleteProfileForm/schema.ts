import dayjs from 'dayjs';
import { isNil } from 'lodash';
import { Regex } from 'utils/const';
import type { InferType } from 'yup';
import { number, object, string } from 'yup';

const schema = object({
  name: string().required(),
  nameKana: string().required().matches(Regex.KATAKANA, '無効な形式です。'),
  email: string().required().matches(Regex.EMAIL, '無効な形式です。'),
  phone: string().required().matches(Regex.PHONE, '無効な形式です。'),
  birthday: string()
    .nullable()
    .test('validDate', '無効な形式です。', (value) => {
      return dayjs(value).isValid() && !dayjs(value).isAfter(dayjs());
    })
    .required(),
  gender: number()
    .typeError('この項目は入力必須です。')
    .test('validGender', 'この項目は入力必須です。', (value) =>
      !isNil(value) ? [0, 1, 2].includes(value) : false,
    ),
});

export default schema;
export type CompleteProfileFormValues = InferType<typeof schema>;
