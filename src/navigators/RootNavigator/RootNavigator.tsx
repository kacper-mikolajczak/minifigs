import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MinifigOrderScreen} from '@screens/minifigOdrer/MinifigOrder';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Minifig Order" component={MinifigOrderScreen} />
    </Stack.Navigator>
  );
};
