import React from 'react';
import '../Styles/TodoListItem.css'; 


const TodoListItem = ({ todo, onRemovePressed, onCompletePressed}) => {
  
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>

      <div className="buttons-container">

        {todo.isCompleted 
          ? <button className="completed-button-pressed">Completed</button>
          : <button 
              onClick={() => onCompletePressed(todo.id)}
              className="completed-button">Mark As Complete</button>   
        }

        <button 
          onClick={() => {onRemovePressed(todo.id)}}
          className="remove-button">
            Remove
        </button>

      </div>
    </div>
  )
}

export default TodoListItem
