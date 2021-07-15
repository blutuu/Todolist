import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import NewTodoForm from './NewTodoForm'; 
import TodoListItem from './TodoListItem';
import { getTodos, getTodosLoading} from './Selectors';
import { loadTodos, removeTodoRequest, updateTodoRequest } from '../Redux/thunks.js';
import '../Styles/TodoList.css'; 

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletePressed: id => dispatch(updateTodoRequest(id))
});

const TodoList = ({ todos=[], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <div className="list-wrapper">

      <NewTodoForm />

      {todos.map((todo, index) => 
        <TodoListItem 
          key={index} 
          todo={todo} 
          onRemovePressed={ onRemovePressed }
          onCompletePressed={ onCompletePressed }/>
      )}

    </div>
  );
  return isLoading ? loadingMessage : content;
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
