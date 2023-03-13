import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

export const GlobalProvider = ({children}: React.PropsWithChildren) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
