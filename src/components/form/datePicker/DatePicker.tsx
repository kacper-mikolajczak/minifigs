import React, {forwardRef, useCallback} from 'react';
import RNDatePicker, {
  DatePickerProps as RNDatePickerProps,
} from 'react-native-date-picker';
import {Pressable} from 'react-native';
import {useBooleanState} from '@hooks/useBooleanState/useBooleanState';
import {Input} from '@components/form/input/Input';

export type DatePickerProps = Omit<
  RNDatePickerProps,
  'open' | 'modal' | 'date'
> & {
  onBlur?: () => void;
  startingDate?: Date;
  date?: Date;
};
export const DatePicker = forwardRef<RNDatePicker, DatePickerProps>(
  ({startingDate = new Date(), onConfirm, onCancel, onBlur, ...props}, ref) => {
    const [open, {set: show, unset: hide}] = useBooleanState(false);

    const handleConfirm = useCallback(
      (date: Date) => {
        hide();
        onConfirm?.(date);
        onBlur?.();
      },
      [hide, onBlur, onConfirm],
    );
    const handleCancel = useCallback(() => {
      hide();
      onCancel?.();
      onBlur?.();
    }, [hide, onBlur, onCancel]);

    const dateAsString = props.date?.toLocaleDateString?.() ?? '';
    return (
      <>
        <Pressable onPress={show}>
          <Input editable={false} value={dateAsString} />
        </Pressable>
        <RNDatePicker
          {...props}
          ref={ref}
          modal
          open={open}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          date={props.date ?? startingDate}
        />
      </>
    );
  },
);
