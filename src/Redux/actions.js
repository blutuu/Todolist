import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from './constants.js'; 

export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text }
});

export const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: { text }
});

export const markTodoComplete = text => ({
  type: MARK_COMPLETE,
  payload: { text }
});

export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const loadTodosSuccess = () => ({
  type: LOAD_TODOS_SUCCESS,
});

export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});