import React from 'react';
import {fireEvent, render, screen} from '@tests/utils';
import {Select, SelectOption} from './Select';

describe('Select tests', () => {
  it.todo('I could not really test it properly :(');
  // const options: Array<SelectOption<string>> = [
  //   {label: 'Option 1', value: '1'},
  //   {label: 'Option 2', value: '2'},
  // ];
  // const keyExtractor = (item: SelectOption<string>) => item.value;

  // const props = {
  //   options,
  //   keyExtractor,
  // };

  // it('displays picked value', () => {
  //   render(<Select {...props} />);

  //   const selectButton = screen.getByTestId('select-button');
  //   fireEvent.press(selectButton);

  //   const pickedOption = screen.getByDisplayValue('Option 1');
  //   fireEvent.press(pickedOption);

  //   // Picker should be closed and only displayed value comes from input
  //   const values = screen.getAllByDisplayValue('Option 1');
  //   expect(values).toHaveLength(1);
  // });

  // it('calls onChange when an options is selected', () => {
  //   const onChangeMock = jest.fn();

  //   render(<Select {...props} onChange={onChangeMock} />);

  //   const selectButton = screen.getByTestId('select-button');
  //   fireEvent.press(selectButton);

  //   expect(onChangeMock).toBeCalled();
  // });
});
