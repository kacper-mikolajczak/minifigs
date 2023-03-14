import React, {createRef} from 'react';
import {View as RNView} from 'react-native';
import {fireEvent, render, screen} from '@tests/utils';
import {Button} from './Button';

describe('Button tests', () => {
  it('renders with correct text', () => {
    const text = 'Red mug';
    render(<Button text={text} />);

    screen.getByText(text);
  });

  it('forwards refs correctly', () => {
    const ref = createRef<RNView>();

    render(<Button ref={ref} />);

    expect(ref.current).toBeDefined();
  });

  it('handles onPress events', () => {
    const onPressMock = jest.fn();

    render(<Button onPress={onPressMock} />);

    const button = screen.getByRole('button');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('does not handle onPress events when disabled', () => {
    const onPressMock = jest.fn();

    render(<Button onPress={onPressMock} disabled />);

    const button = screen.getByRole('button');
    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
