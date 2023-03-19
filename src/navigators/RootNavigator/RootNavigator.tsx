import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MinifigOrderScreen} from '@screens/minifigOdrer/MinifigOrder';
import {MinifigDetailsScreen} from '@screens/minifigDetails/MinifigDetails';

export type RootStackParamList = {
  MinifigOrder: {search: string};
  MinifigDetails: {id: Domain.Minifig['setId']};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MinifigOrder">
      <Stack.Screen
        name="MinifigOrder"
        component={MinifigOrderScreen}
        initialParams={{search: 'harry potter'}}
      />
      <Stack.Screen name="MinifigDetails" component={MinifigDetailsScreen} />
    </Stack.Navigator>
  );
};
