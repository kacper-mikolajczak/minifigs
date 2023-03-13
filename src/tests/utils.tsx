// Source: https://testing-library.com/docs/react-testing-library/setup/

import {NavigationContainer} from '@react-navigation/native';
import {render, RenderOptions} from '@testing-library/react-native';
import React, {ReactElement} from 'react';

const GlobalProviderMock = ({children}: {children: React.ReactNode}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: GlobalProviderMock, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
