import i18n from 'i18n';
import {z} from 'zod';

export const shippingInfoSchema: z.ZodType<Domain.UserShippingInfo> = z.object({
  firstName: z
    .string()
    .min(1, i18n.t('shippingForm.firstName.min'))
    .max(255, i18n.t('shippingForm.firstName.max', {length: 255})),
  lastName: z
    .string()
    .min(1, i18n.t('shippingForm.lastName.min'))
    .max(255, i18n.t('shippingForm.lastName.max', {length: 255})),
  email: z.string().email(i18n.t('shippingForm.email')),
  phoneNumber: z
    .string()
    .regex(
      /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
      i18n.t('shippingForm.phoneNumber'),
    ),
  dateOfBirth: z.date().max(new Date(), i18n.t('shippingForm.dateOfBirth')),
  street: z
    .string()
    .min(1, i18n.t('shippingForm.street.min'))
    .max(255, i18n.t('shippingForm.street.max', {length: 255})),
  city: z
    .string()
    .min(1, i18n.t('shippingForm.city.min'))
    .max(255, i18n.t('shippingForm.city.max', {length: 255})),
  state: z.string(),
  zipCode: z
    .string()
    .regex(/^\d{5}(-?\d{4})?$/, i18n.t('shippingForm.zipCode')),
});
