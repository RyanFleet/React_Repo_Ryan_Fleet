import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import ShowAll from './components/ShowAll';

function App() {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <ShowAll todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
