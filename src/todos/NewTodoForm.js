import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import '../Styles/NewTodoForm.css'; 

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text))
});

const NewTodoForm = ({ todos, onCreatedPressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input 
        type="text" 
        className="new-todo-input" 
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}/>

      <button 
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(todo => todo.text === inputValue);
          if (!isDuplicateText) {
            onCreatedPressed(inputValue);
            setInputValue('');
          }
        }}>
        Create Todo
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
