import React, {forwardRef} from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {Text} from '@components/typography/text/Text';

export type ButtonProps = PressableProps & {
  text?: string; //Helper for just-text Buttons
  wrapperProps?: ViewProps;
  variant?: 'primary' | 'secondary';
};

export const Button = forwardRef<View, ButtonProps>(
  ({wrapperProps, text, variant = 'primary', children, ...props}, ref) => {
    return (
      <View {...wrapperProps} style={[styles.wrapper, wrapperProps?.style]}>
        <Pressable
          android_ripple={{color: 'white'}}
          {...props}
          style={state => [
            styles.button,
            styles[variant],
            props.disabled && styles.disabled,
            mergeStyleProp(props.style, state),
          ]}
          accessibilityRole="button"
          ref={ref}>
          <>
            {text && <Text style={styles.defaultText}>{text}</Text>}
            {children}
          </>
        </Pressable>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    //Hack which helps with rounded button ripple effects
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: 'orange',
  },
  secondary: {
    backgroundColor: 'dodgerblue',
  },
  disabled: {
    backgroundColor: 'gray',
  },
  defaultText: {
    textTransform: 'uppercase',
    fontWeight: '800',
    color: 'white',
  },
});

const mergeStyleProp = (
  styleProp: PressableProps['style'],
  state: PressableStateCallbackType,
) => {
  if (typeof styleProp === 'function') {
    return styleProp(state);
  }
  return styleProp;
};
