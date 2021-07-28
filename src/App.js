import logo from './logo.svg';
import './App.css';
import ListFront from './Components/ListFront.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To Do List</p>
        <ListFront/>
      </header>
    </div>
  );
}

export default App;
