import React, {useRef} from 'react';

import {Picker} from '@react-native-picker/picker';
import {Pressable, StyleSheet} from 'react-native';
import {Input} from '@components/form/input/Input';

export type SelectOption<T> = {
  label: string;
  value: T;
};

export type SelectProps<T> = {
  options: Array<SelectOption<T>>;
  keyExtractor: (item: SelectOption<T>) => string;
  value?: T;
  onChange?: (value: T, index: number) => void;
  onBlur?: () => void;
};

export const Select = <T,>(props: SelectProps<T>) => {
  const pickerRef = useRef<Picker<T>>(null);

  const currentOption = props.options.find(({value}) => props.value === value);

  return (
    <>
      <Pressable onPress={pickerRef.current?.focus} testID="select-button">
        <Input
          editable={false}
          value={currentOption?.label}
          accessibilityRole="text"
          testID="select-input"
        />
      </Pressable>
      <Picker
        ref={pickerRef}
        selectedValue={props.value}
        onValueChange={props.onChange}
        onBlur={props.onBlur}
        style={styles.hidden}>
        {props.options.map(item => (
          <Picker.Item {...item} key={props.keyExtractor(item)} />
        ))}
      </Picker>
    </>
  );
};

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
});

// I don't know how to properly type generic forwardRef props
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
// https://fettblog.eu/typescript-react-generic-forward-refs/
// export const Select = forwardRef(_Select);
