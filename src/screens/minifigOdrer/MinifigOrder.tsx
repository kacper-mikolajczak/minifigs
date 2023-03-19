import React from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import {Heading} from '@components/typography/heading/Heading';
import {useTranslation} from 'react-i18next';
import {RandomMinifigPreview} from './partials/randomMinifigPreview/RandomMinifigPreview';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigators/RootNavigator/RootNavigator';
import {useRandomMinifigQuery} from '@loaders/minifigs/queries/useRandomMinifigQuery';
import {ShippingForm} from './partials/shippingForm/ShippingForm';
import {Form, useZodForm} from '@components/form/form/Form';
import {shippingFormSchema} from './partials/shippingForm/schema';
import {useOrderMinifigMutation} from '@loaders/minifigs/mutations/useOrderMinifigMutation';
import {Button} from '@components/buttons/button/Button';

type MinifigOrderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MinifigOrder'
>;

export const MinifigOrderScreen = ({
  navigation,
  route,
}: MinifigOrderScreenProps) => {
  const {search} = route.params;
  const [t] = useTranslation();

  const shippingForm = useZodForm({
    schema: shippingFormSchema,
    mode: 'onTouched',
  });

  const randomMinifigQuery = useRandomMinifigQuery(search);
  const orderMinifigMutation = useOrderMinifigMutation({
    onSettled: () => {
      pickNextMovie(nextSearch =>
        navigation.navigate('MinifigOrder', {search: nextSearch}),
      );
    },
  });

  const handleSubmit = (shippingInfo: Domain.UserShippingInfo) => {
    if (!randomMinifigQuery.data) return;
    orderMinifigMutation.mutate({
      shippingInfo,
      setId: randomMinifigQuery.data.setId,
    });
  };

  const submitDisabled =
    (false && !shippingForm.formState.isValid) ||
    orderMinifigMutation.isLoading;

  return (
    <ScrollView style={styles.container}>
      <ScreenTitle />
      <RandomMinifigPreview
        minifig={randomMinifigQuery.data}
        onDetailsPress={id => navigation.navigate('MinifigDetails', {id})}
        onDraw={randomMinifigQuery.refetch}
        drawingDisabled={randomMinifigQuery.isFetching}
      />
      <Form form={shippingForm}>
        <ShippingForm />
      </Form>
      <Button
        text={t('minifigPreview.submit')}
        variant="secondary"
        disabled={submitDisabled}
        onPress={shippingForm.handleSubmit(handleSubmit)}
        wrapperProps={{style: styles.submitButton}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#123',
    paddingHorizontal: 24,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 32,
  },
  submitButton: {
    marginVertical: 24,
  },
});

const ScreenTitle = () => {
  const [t] = useTranslation();
  return (
    <Heading variant="h3" style={styles.screenTitle}>
      {t('minifigPreview.screenTitle')}
    </Heading>
  );
};

// It's just an easter egg, it's almost April!
const pickNextMovie = (cb: (choice: string) => void) => {
  Alert.alert('Yay!', ' Choose your next movie', [
    {
      text: 'Batman',
      onPress: () => cb('Batman'),
    },
    {
      text: 'Harry Potter',
      onPress: () => cb('Harry Potter'),
    },
  ]);
};
