import React from 'react';
import {RootStackParamList} from '@navigators/RootNavigator/RootNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '@components/buttons/button/Button';
import {useMinifigPartsQuery} from '@loaders/minifigs/queries/useMinifigPartsQuery';

type MinifigDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MinifigDetails'
>;

export const MinifigDetailsScreen = ({
  route,
  navigation,
}: MinifigDetailsScreenProps) => {
  const minifigPartsQuery = useMinifigPartsQuery(route.params.id);

  return (
    <Button
      onPress={navigation.goBack}
      text={`This is Details screen for ${route.params.id}`}
    />
  );
};
