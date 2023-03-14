// https://react.i18next.com/guides/quick-start
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from '@assets/translations';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
