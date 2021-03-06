import {
  createTodo,
  removeTodo,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure, 
  markTodoComplete} from "./actions";


export const displayAlert = (text) => () => {
  alert(text);
}

export const loadTodos = () => async(dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
  
    dispatch(loadTodosSuccess(todos));
  } catch(e) {
      dispatch(loadTodosFailure());
      dispatch(displayAlert(e));
  }
}

export const addTodoRequest = text => async dispatch => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      }, 
      method: 'post',
      body,
    });
    const todo = await response.json();

    dispatch(createTodo(todo));
  } catch (e) {
      dispatch(displayAlert(e));
  }
}

export const removeTodoRequest = id => async dispatch => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete'
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
}

export const updateTodoRequest = id => async dispatch => {
  try {
    const body = JSON.stringify({ id });
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      headers: {
        'Content-Type': 'application/json',
      }, 
      method: 'post',
      body
    });
    const todo = await response.json();
    dispatch(markTodoComplete(todo));
    
  } catch (e) {
    dispatch(displayAlert(e));
  }
}