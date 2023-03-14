import React, {createRef} from 'react';
import {fireEvent, render, screen} from '@tests/utils';
import {Input} from './Input';
import {TextInput} from 'react-native';

describe('Input tests', () => {
  it('handles onChange correctly', () => {
    const onChangeMock = jest.fn();
    const text = 'Test text';
    const id = 'input';
    render(<Input onChangeText={onChangeMock} testID={id} />);

    const input = screen.getByTestId(id);
    fireEvent.changeText(input, text);

    expect(onChangeMock).toHaveBeenCalledWith(text);
  });

  it('passes placeholder to TextInput', () => {
    const placeholder = 'Enter text here';
    render(<Input placeholder={placeholder} />);

    screen.getByPlaceholderText(placeholder);
  });

  it('forwards refs correctly', () => {
    const ref = createRef<TextInput>();
    render(<Input ref={ref} />);

    expect(ref.current).toBeDefined();
  });
});
