import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = ({initialRouteName}) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
