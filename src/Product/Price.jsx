import { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Price extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            amd: 0,
            price: `${props.text}$`,
            exchangeRate: 390,
        };
    }
    changeCurrency = ()=>{
        const { price, exchangeRate } = this.state;
        let modifiedPrice;
        if(price.endsWith('$')){
            modifiedPrice = parseFloat(price)*exchangeRate + 'amd';
        }
        else {
            modifiedPrice = parseFloat(price)/exchangeRate + '$';
        }
        
        this.setState({
            price: modifiedPrice
        });
    };
    
    render(){

        

      return  (
        
            <span>
            Price: {this.state.price} &nbsp;
            <Button onClick={this.changeCurrency} variant="warning">Change the currency</Button>
            </span>
        
        
        
        
      );
    }
  }
  export default Price;