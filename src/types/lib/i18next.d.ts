import {DefaultNS, TranslationSchema} from '@assets/translations';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: DefaultNS;
    resources: TranslationSchema;
  }
}
