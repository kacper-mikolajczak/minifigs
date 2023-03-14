import React, {createRef} from 'react';
import {render, screen} from '@tests/utils';
import {Text as RNText} from 'react-native';
import {Text} from './Text';

describe('Text component tests', () => {
  it('renders with the correct text', () => {
    const text = 'Green mug';

    render(<Text>{text}</Text>);
    screen.getByText(text);
  });

  it('forwards refs correctly', () => {
    const ref = createRef<RNText>();

    render(<Text ref={ref}>Hello world</Text>);

    expect(ref.current).toBeDefined();
  });
});
