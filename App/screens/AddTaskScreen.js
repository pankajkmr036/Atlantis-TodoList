import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import AddTodo from '../components/AddTodo';
const AddTaskScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AddTodo />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTaskScreen;
