import * as React from 'react';
import {RootNavigator} from './navigators/RootNavigator/RootNavigator';
import {GlobalProvider} from './providers/globalProvider';

export const App = () => {
  return (
    <GlobalProvider>
      <RootNavigator />
    </GlobalProvider>
  );
};
