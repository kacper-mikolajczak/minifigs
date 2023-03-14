import React from 'react';
import {StyleSheet, View} from 'react-native';
import {statesOptions} from '@assets/data/states/states';
import {DatePicker} from '@components/form/datePicker/DatePicker';
import {FormField} from '@components/form/form/FormField';
import {Input} from '@components/form/input/Input';
import {Select} from '@components/form/select/Select';

export const ShippingInfoForm = () => {
  return (
    <View style={styles.formContainer}>
      <FormField
        name="firstName"
        label="First name"
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="lastName"
        label="Last name"
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="email"
        label="Email"
        render={({field}) => <Input {...field} inputMode="email" />}
      />
      <FormField
        name="phoneNumber"
        label="Phone Number"
        render={({field}) => <Input {...field} inputMode="tel" />}
      />
      <FormField
        name="dateOfBirth"
        label="Date of birth"
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
        label="Street"
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="city"
        label="City"
        render={({field}) => <Input {...field} />}
      />
      <FormField
        name="state"
        label="State"
        render={({field}) => (
          <Select
            {...field}
            options={statesOptions}
            keyExtractor={({value}) => value}
          />
        )}
      />
      <FormField
        name="zipCode"
        label="Zip code"
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
