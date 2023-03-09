import { Component } from 'react';
import logo from './logo.svg';
import Hello from './Hello';
import Welcome from './Welcome';
import './App.css';
import './New.css';

class Product extends Component{
  // constructor(props){
  //   super(props);
  // }
  
  render(){
    return  (
      <div>
        <h3>{this.props.text}</h3>
        <div><b>{this.props.count} հատ</b></div>
        
      </div>
      
    );
  }
}

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
        
        <Name />
        <Product text="mi ban" count="35"/>
        <Product text="mi 2 ban" count="45"/>
        <Product text="mi 3 ban" count="55"/>
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

