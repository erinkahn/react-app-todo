import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.js';
import List from './Components/List.js';

function App() {

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const tasksNoun = todos.length === 1 ? ' to do' : ` to do's`;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>To Do List</p>
        <h2>You have {count}{tasksNoun} in your list</h2>
        
        <Form count={count} setCount={setCount} todos={todos} setTodos={setTodos}/>

        <List count={count} setCount={setCount} todos={todos} setTodos={setTodos}/>
      </header>
    </div>
  );
}

export default App;
