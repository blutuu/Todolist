import TodoList from '../todos/TodoList';
import styled from 'styled-components';

const AppContainer = styled.div`

`;

function App() {
  return (
    <div className="App">
      <TodoList todos={["test", "Hello", "World"]}/>
    </div>
  );
}

export default App;
