import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Heading} from '@components/typography/heading/Heading';
import {useTranslation} from 'react-i18next';
import {RandomMinifigPreview} from './partials/randomMinifigPreview/RandomMinifigPreview';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigators/RootNavigator/RootNavigator';
import {useRandomMinifigQuery} from '@loaders/queries/minifigs/useRandomMinifigQuery';
import {ShippingForm} from './partials/shippingForm/ShippingForm';
import {Form, useZodForm} from '@components/form/form/Form';
import {shippingFormSchema} from './partials/shippingForm/schema';

type MinifigOrderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MinifigOrder'
>;

export const MinifigOrderScreen = ({route}: MinifigOrderScreenProps) => {
  const {search} = route.params;

  const shippingForm = useZodForm({
    schema: shippingFormSchema,
    mode: 'onTouched',
  });

  const randomMinifigQuery = useRandomMinifigQuery(search);

  return (
    <ScrollView style={styles.container}>
      <ScreenTitle />
      <RandomMinifigPreview
        minifig={randomMinifigQuery.data}
        onDraw={randomMinifigQuery.refetch}
      />
      <Form form={shippingForm}>
        <ShippingForm />
      </Form>
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
});

const ScreenTitle = () => {
  const [t] = useTranslation();
  return (
    <Heading variant="h3" style={styles.screenTitle}>
      {t('minifigPreview.screenTitle')}
    </Heading>
  );
};
