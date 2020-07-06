import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from '../../App';
import Example from '../features/example';
import List from '../features/exampleList';
const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Example} options={{ title: 'My Home' }} />
      <Stack.Screen name='List' component={List} options={{ title: 'List' }} />
    </Stack.Navigator>
  </NavigationContainer>
);
