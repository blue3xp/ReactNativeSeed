/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Boot from './src/boot'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Boot);
