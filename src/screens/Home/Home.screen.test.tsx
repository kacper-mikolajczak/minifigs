import * as React from 'react';
import {render, screen} from '@tests/utils';
import {HomeScreen} from './Home.screen';

describe('Home screen tests', () => {
  it('displays test text', () => {
    render(<HomeScreen />);

    screen.getByTestId('test-text');
  });
});
