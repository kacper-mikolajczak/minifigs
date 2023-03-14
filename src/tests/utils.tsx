// Source: https://testing-library.com/docs/react-testing-library/setup/
// Source: https://tanstack.com/query/v4/docs/react/guides/testing

import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, RenderOptions} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      cacheTime: Infinity,
    },
  },
});

const GlobalProviderMock = ({children}: {children: React.ReactNode}) => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NavigationContainer>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: GlobalProviderMock, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
