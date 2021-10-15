import React from 'react';

import {List} from 'react-native-paper';

import {useSelector} from 'react-redux';

const TodoList = () => {
  const {todoList} = useSelector(state => state.todoList);

  return (
    <List.Section>
      <List.Subheader>My TODOs List</List.Subheader>

      {todoList && todoList.length ? (
        todoList.map((item, index) => (
          <List.Item
            title={item.todoText}
            key={`todo-${item.id}`}
            left={() => <List.Icon icon="folder" />}
          />
        ))
      ) : (
        <List.Item
          title="No todos, yay!"
          left={() => <List.Icon icon="check" />}
        />
      )}
    </List.Section>
  );
};

export default TodoList;
