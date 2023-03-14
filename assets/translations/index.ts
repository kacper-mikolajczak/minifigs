import {default as en} from './en/en.json';

// English (en) is default language that other translations should derived their types from
export type TranslationSchema = {
  translation: typeof en;
};
export type DefaultNS = typeof defaultNS;
export type Languagues = (typeof languagues)[number];

export const defaultNS = 'translation';
export const languagues = ['en'] as const;

export const resources: Record<Languagues, TranslationSchema> = {
  en: {translation: en},
};
