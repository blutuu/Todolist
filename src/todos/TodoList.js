import React from 'react';
import { connect } from 'react-redux'; 
import NewTodoForm from './NewTodoForm'; 
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoComplete } from '../Redux/actions'; 
import { displayAlert } from '../Redux/thunks.js';
import '../Styles/TodoList.css'; 

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletePressed: text => dispatch(markTodoComplete(text)),
  onDisplayAlertClicked: text => dispatch(displayAlert(text))
});

const TodoList = ({ todos=[], onRemovePressed, onCompletePressed, onDisplayAlertClicked }) => {
  return (
    <div className="list-wrapper">

      <NewTodoForm />

      {todos.map((todo, index) => 
        <TodoListItem 
          key={index} 
          todo={todo} 
          onRemovePressed={ onRemovePressed }
          onCompletePressed={ onDisplayAlertClicked }/>
      )}

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
