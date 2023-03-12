import { Component } from 'react';
import './App.css';
import './New.css';
import Product from './Product/Product';


class App extends Component {
state = {
  amd: 0,
  exchangeRate: 390,
  products: [
    {    
      name:'banana', 
      price:'5', 
      description: 'Fresh bananas from Ecuador'
    },
    {    
      name:'apple', 
      price:'8', 
      description: 'Golden apples'
    },
    {    
      name:'pear', 
      price:'8', 
      description: 'Sweet pears!'
    },
    {    
      name:'plum', 
      price:'4', 
      description: 'Sweet plums!'
    },
    ]
}
handleInputChange = (event)=>{
this.setState({
  amd: event.target.value,
});
};


render(){
  const productComponents = this.state.products.map((product)=>{
    return (
      <Product 
      key={product.name}
      name={product.name} 
      price={product.price} 
      description={product.description}
      />
    )
  });
  
  const usd = (this.state.amd / this.state.exchangeRate).toFixed(2)

    return (
      <div className="App">
      {productComponents}<br/><br/>

     AMD: <input
      type="number" 
      placeholder='Input AMD'
      onChange={this.handleInputChange}
      /> 
     = 
     <input type="text" value={usd} readOnly={true}/>$

      </div>
    );
}

}

export default App;
