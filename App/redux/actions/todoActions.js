import {ADD_TODO} from '../constants/todoConstants';

let nextTodoId = 0;

export const addTodo = todoItem => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    todoItem,
  },
});
