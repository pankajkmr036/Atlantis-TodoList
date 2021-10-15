import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import CustomNavigationBar from './CustomNavigationBar';
import LandingScreen from '../screens/LandingScreen';
import TaskViewScreen from '../screens/TaskViewScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {userInfo} = useSelector(state => state.userInfoData);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          header: props => <CustomNavigationBar {...props} />,
        }}>
        {userInfo?.idToken ? (
          <>
            <Stack.Screen name="TaskViewScreen" component={TaskViewScreen} />
            <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
          </>
        ) : (
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
