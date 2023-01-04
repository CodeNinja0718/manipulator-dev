import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = object({
  phone: string().required(),
});

export default schema;
export type RegisterFormValues = InferType<typeof schema>;
