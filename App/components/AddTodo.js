import React, {useState} from 'react';
import {Alert} from 'react-native';
import {TextInput, Button, Card, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {addTodo} from '../redux/actions/todoActions';

const AddTodo = () => {
  const [todoItem, setTodoItem] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onChangeText = text => setTodoItem(text);

  const onPressClose = () => navigation.pop();

  const onPressAdd = () => {
    if (!todoItem.length) {
      return Alert.alert('Sorry!', 'Please enter some text');
    }
    dispatch(addTodo(todoItem));
    navigation.pop();
  };

  return (
    <Card>
      <Card.Content>
        <Title>Add new task to TODO list</Title>

        <TextInput
          label="Please enter text here..."
          value={todoItem}
          type="flat"
          onChangeText={onChangeText}
        />
      </Card.Content>

      <Card.Actions>
        <Button icon="close" onPress={onPressClose}>
          Cancel
        </Button>

        <Button icon="border-color" onPress={onPressAdd}>
          Add
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default AddTodo;
