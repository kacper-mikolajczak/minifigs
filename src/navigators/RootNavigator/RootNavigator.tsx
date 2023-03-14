import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MinifigOrderScreen} from '@screens/minifigOdrer/MinifigOrder';

export type RootStackParamList = {
  MinifigOrder: {search: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MinifigOrder"
        component={MinifigOrderScreen}
        initialParams={{search: 'harry potter'}}
      />
    </Stack.Navigator>
  );
};
