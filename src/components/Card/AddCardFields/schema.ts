import valid from 'card-validator';
import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = object({
  card_number: string()
    .required()
    .test('isValidCard', 'Invalid card number', (value) => {
      const validator = valid.number(value);
      if (
        validator?.card?.niceType &&
        ![
          'Visa',
          'Mastercard',
          'JCB',
          'Diners Club',
          'American Express',
        ].includes(validator?.card?.niceType)
      ) {
        return false;
      }
      return valid.number(value).isValid;
    }),
  card_expire: string()
    .required()
    .test(
      'isValidCard',
      'Invalid expire date',
      (value) => valid.expirationDate(value).isValid,
    ),
  security_code: string()
    .required()
    .min(3, 'Invalid CVC')
    .when('card_number', {
      is: (value: string) => {
        const validator = valid.number(value);
        return (
          validator.isValid &&
          validator?.card?.niceType &&
          [
            'Visa',
            'Mastercard',
            'JCB',
            'Diners Club',
            'American Express',
          ].includes(validator?.card?.niceType)
        );
      },
      then: string().trim().length(3, 'Invalid CVC').required(),
    })
    .when('card_number', {
      is: (value: string) => {
        const validator = valid.number(value);
        return (
          validator.isValid && validator?.card?.niceType === 'American Express'
        );
      },
      then: string().trim().length(4, 'Invalid CVC').required(),
    }),
});

export default schema;
export type AddCardFormValues = InferType<typeof schema>;
