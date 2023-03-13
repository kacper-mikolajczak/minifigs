/**
 * @format
 */

import {checkEnv} from 'config/env.config';
import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';

if (!checkEnv())
  console.warn('Environment not loaded properly. Please check config.');

AppRegistry.registerComponent(appName, () => App);
