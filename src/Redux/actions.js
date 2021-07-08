import {
  CREATE_TODO,
  REMOVE_TODO
} from './constants'; 

export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text }
});

export const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: { text }
});