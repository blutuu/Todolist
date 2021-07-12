import React from 'react';
import { connect } from 'react-redux'; 
import NewTodoForm from './NewTodoForm'; 
import TodoListItem from './TodoListItem';
import { removeTodo } from '../Redux/actions'; 
import '../Styles/TodoList.css'; 

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text))
});

const TodoList = ({ todos=[], onRemovePressed }) => {
  return (
    <div className="list-wrapper">

      <NewTodoForm />

      {todos.map((todo, index) => 
        <TodoListItem 
          key={index} 
          todo={todo} 
          onRemovePressed={onRemovePressed}/>
      )}

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
