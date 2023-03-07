import logo from './logo.svg';
import todo from './todo-list.svg';
import Hello from './Hello';
import Welcome from './Welcome';
import Images from './Images';
import './App.css';
import './New.css';



function Name(){
const name = 'John Smith';
  return  (
    <div>
  {name}
  <Hello name='John' age={23}/>
  </div>
  );
}




function App() {

  const message = 'Hello, I am your first React code.';

  return (
    <div className="App">
      <header className="App-header">
        <Images src={logo}/>
        <Images src={todo} />
        <Name />
        <Welcome name='to homework 60'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

