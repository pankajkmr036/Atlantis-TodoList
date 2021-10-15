import {ADD_TODO} from '../constants/todoConstants';

let nextTodoId = 0;

export const addTodo = todoText => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    todoText,
  },
});
