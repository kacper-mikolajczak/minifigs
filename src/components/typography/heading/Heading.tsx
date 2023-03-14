import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import {Text} from '../text/Text';

interface HeadingProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3';
}

export const Heading = ({variant = 'h1', ...props}: HeadingProps) => {
  return <Text {...props} style={[styles[variant], props.style]} />;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
    fontWeight: '800',
  },
  h2: {
    fontSize: 36,
    fontWeight: '700',
  },
  h3: {
    fontSize: 24,
  },
});
