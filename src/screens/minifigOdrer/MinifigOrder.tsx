import {ScrollView, StyleSheet} from 'react-native';
import {Heading} from '@components/typography/heading/Heading';
import {useTranslation} from 'react-i18next';
import {RandomMinifigPreview} from './partials/randomMinifigPreview/RandomMinifigPreview';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigators/RootNavigator/RootNavigator';

type MinifigOrderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MinifigOrder'
>;

export const MinifigOrderScreen = ({route}: MinifigOrderScreenProps) => {
  const {search} = route.params;

  return (
    <ScrollView style={styles.container}>
      <ScreenTitle />
      <RandomMinifigPreview />
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
