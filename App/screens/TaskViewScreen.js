import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
} from 'react-native';

import TodoList from '../components/TodoList';
const TaskViewScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TodoList />
        <Button
          title="Add New Task"
          onPress={() => navigation.navigate('AddTaskScreen')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TaskViewScreen;
