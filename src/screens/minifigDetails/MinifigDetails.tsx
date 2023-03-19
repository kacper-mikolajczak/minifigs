import React from 'react';
import {RootStackParamList} from '@navigators/RootNavigator/RootNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '@components/buttons/button/Button';

type MinifigDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MinifigDetails'
>;

export const MinifigDetailsScreen = ({
  route,
  navigation,
}: MinifigDetailsScreenProps) => {
  return (
    <Button
      onPress={navigation.goBack}
      text={`This is Details screen for ${route.params.id}`}
    />
  );
};
