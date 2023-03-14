import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

export const HomeScreen = () => {
  const [t] = useTranslation();
  return <Text testID="test-text">{t('test-text')}</Text>;
};
