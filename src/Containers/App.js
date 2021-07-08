import TodoList from '../todos/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList todos={["test", "Hello", "World"]}/>
    </div>
  );
}

export default App;
