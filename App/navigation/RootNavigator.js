import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';

import TaskViewScreen from '../screens/TaskViewScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = ({initialRouteName}) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="TaskViewScreen" component={TaskViewScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
