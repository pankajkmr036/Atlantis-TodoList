import {ADD_TODO} from '../constants/todoConstants';

export const todoListReducer = (state = {todoList: []}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todoList: [...state.todoList, action.payload]};
    default:
      return state;
  }
};
