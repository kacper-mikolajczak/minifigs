import React from 'react';
import {StyleSheet, View} from 'react-native';
import {statesOptions} from '@assets/data/states/states';
import {DatePicker} from '@components/form/datePicker/DatePicker';
import {FormField} from '@components/form/form/FormField';
import {Input} from '@components/form/input/Input';
import {Select} from '@components/form/select/Select';
import {useTranslation} from 'react-i18next';

export const ShippingForm = () => {
  const [t] = useTranslation();

  return (
    <View style={styles.formContainer}>
      <FormField
        name="firstName"
        label={t('shippingForm.labels.firstName')}
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="lastName"
        label={t('shippingForm.labels.lastName')}
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="email"
        label={t('shippingForm.labels.email')}
        render={({field}) => <Input {...field} inputMode="email" />}
      />
      <FormField
        name="phoneNumber"
        label={t('shippingForm.labels.phoneNumber')}
        render={({field}) => <Input {...field} inputMode="tel" />}
      />
      <FormField
        name="dateOfBirth"
        label={t('shippingForm.labels.dateOfBirth')}
        render={({field}) => (
          <DatePicker
            mode="date"
            date={field.value}
            onBlur={field.onBlur}
            onConfirm={field.onChange}
          />
        )}
      />
      <FormField
        name="street"
        label={t('shippingForm.labels.street')}
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="city"
        label={t('shippingForm.labels.city')}
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="state"
        label={t('shippingForm.labels.state')}
        render={({field}) => (
          <Select
            {...field}
            options={statesOptions ?? []}
            keyExtractor={({value}) => value}
          />
        )}
      />
      <FormField
        name="zipCode"
        label={t('shippingForm.labels.zipCode')}
        render={({field}) => <Input {...field} inputMode="numeric" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
  },
});
