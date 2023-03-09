import logo from './logo.svg';
import './App.css';
import './New.css';
import Product from './Product/Product';







function App() {

  

  return (
    <div className="App">
      
      <header className="App-header">
        
        
        <Product name='banabas' price='1$' description='Fresh bananas from Ecuador'/>
        <Product name='apple' price='0.5$' description='Fresh apple from Ecuador'/>
        
        
        <img src={logo} className="App-logo" alt="logo" />
        
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

