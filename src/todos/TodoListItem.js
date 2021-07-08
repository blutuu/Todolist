import React from 'react';
import '../Styles/TodoListItem.css'; 


const TodoListItem = ({todo}) => {
  return (
    <div className="todo-item-container">
      <h3>{todo}</h3>

      <div className="buttons-container">

        <button className="completed-button">Mark As Completed</button>

        <button 
          onClick={() => {}}
          className="remove-button">
            Remove
        </button>

      </div>
    </div>
  )
}

export default TodoListItem
