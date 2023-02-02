import { Regex } from 'utils/const';
import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = object({
  phone: string().required().matches(Regex.PHONE, 'Phone number is not valid'),
});

export default schema;
export type LoginFormValues = InferType<typeof schema>;
