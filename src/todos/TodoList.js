import React from 'react';
import NewTodoForm from './NewTodoForm'; 
import TodoListItem from './TodoListItem'; 
import '../Styles/TodoList.css'; 

const TodoList = ({ todos=["Hello"] }) => {
  return (
    <div className="list-wrapper">

      <NewTodoForm />

      {todos.map((todo, index) => 
        <TodoListItem 
          key={index} 
          todo={todo} />
      )}

    </div>
  )
}

export default TodoList;
