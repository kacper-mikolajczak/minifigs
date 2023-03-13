import Config from 'react-native-config';

export const ENV = {
  REBRICKABLE_API_URL: Config.REBRICKABLE_API_URL as string,
  REBRICKABLE_API_KEY: Config.REBRICKABLE_API_KEY as string,
};

export type Env = typeof ENV;

export function checkEnv() {
  const variablesLoaded = Object.values(ENV).every(val => val !== undefined);
  return variablesLoaded;
}
