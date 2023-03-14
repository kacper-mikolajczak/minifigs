import React from 'react';
import {render, screen} from '@tests/utils';
import {Heading} from './Heading';

describe('Heading tests', () => {
  it('renders with the correct text', () => {
    const text = 'Blue mug';

    render(<Heading>{text}</Heading>);
    screen.getByText(text);
  });
});
