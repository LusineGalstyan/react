import { Component } from 'react';
import Price from './Price';
import Name from './Name';
import Description from './Description';

class Product extends Component{
    
    
    render(){
      
        const {name, price, description} = this.props;
        return (
            <div>
            <Name text={name}/>&nbsp;|&nbsp;
            <Price text={price}/>&nbsp;|&nbsp;
             <Description text={description}/>
            </div>
            );
    }
  }
  export default Product;