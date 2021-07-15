import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from './constants.js'; 

export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  payload: { todo }
});

export const markTodoComplete = todo => ({
  type: MARK_COMPLETE,
  payload: { todo }
});

export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const loadTodosSuccess = todos => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos }
});

export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});