import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RootStackParamList} from '@navigators/RootNavigator/RootNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '@components/buttons/button/Button';
import {useMinifigPartsQuery} from '@loaders/minifigs/queries/useMinifigPartsQuery';
import {MinifigPart} from './partials/MinifigPart';
import {useTranslation} from 'react-i18next';

type MinifigDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MinifigDetails'
>;

export const MinifigDetailsScreen = ({
  route,
  navigation,
}: MinifigDetailsScreenProps) => {
  const [t] = useTranslation();
  const minifigPartsQuery = useMinifigPartsQuery(route.params.id);

  return (
    <ScrollView style={styles.container}>
      <Button onPress={navigation.goBack} text={t('minifigDetails.goBack')} />
      {minifigPartsQuery.data?.map(part => (
        <MinifigPart part={part} key={part.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#123',
    paddingHorizontal: 24,
  },
});
