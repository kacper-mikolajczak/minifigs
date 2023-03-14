import React, {forwardRef} from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

export type TextProps = RNTextProps;

export const Text = forwardRef<RNText, TextProps>((props, ref) => {
  return <RNText {...props} style={[styles.base, props.style]} ref={ref} />;
});

const styles = StyleSheet.create({
  base: {
    color: 'white',
    fontWeight: '600',
  },
});
