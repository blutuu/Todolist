import {
  CREATE_TODO,
  REMOVE_TODO
} from './constants'; 

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch(type) {
    
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false
      };

      return Object.assign({}, state, { newTodo });
    }

    case REMOVE_TODO: {
      const { text } = payload;
      const filteredState = state.filter(todo => todo.text !== text);

      return Object.assign({}, state, filteredState);
    }

    default:
      return state;
  }
}