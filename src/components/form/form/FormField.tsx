import React from 'react';
import {useFormContext, Controller, ControllerProps} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../typography/text/Text';

export interface UseFormFieldProps
  extends Pick<ControllerProps, 'render' | 'name'> {
  label: string;
}

export const useFormField = <P extends UseFormFieldProps>(props: P) => {
  const {label, name, ...otherProps} = props;

  return {
    formFieldProps: {name, label},
    childProps: {...otherProps, name},
  };
};

interface FormFieldProps extends UseFormFieldProps {}

export function FormField({name, label, render}: FormFieldProps) {
  const form = useFormContext();
  const {error} = form.getFieldState(name, form.formState);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller control={form.control} name={name} render={render} />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    marginBottom: 8,
  },
  error: {
    color: 'red',
  },
});
