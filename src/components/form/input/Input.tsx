import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export type InputProps = TextInputProps;

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  return <TextInput {...props} style={[styles.input, props.style]} ref={ref} />;
});

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
});
