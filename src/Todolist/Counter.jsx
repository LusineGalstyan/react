import React, { useState } from 'react';
import {Col, Button, Form, InputGroup} from 'react-bootstrap';


function Counter() {
    
    const [counter, setCounter, setText] = useState(0);
 
    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        setCounter(count => count - 1);
    };
    const text = () => {
        if({counter} < 0){
            setText('Negative');
        }else{
            setText('Positive') ;
        }
        console.log(setText);
    }
    
 
  
 
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
        <div className="counter">
        <h4>React Counter</h4>
        <InputGroup className="mb-3">
            <Button variant="outline-secondary" onClick={decrease}>
            -
            </Button>
            <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={counter}
            className="counter__output"
            />
            <Button variant="outline-secondary" onClick={increase}>
            +
            </Button>
        </InputGroup>
        <br />
        <span>{text}</span>
        </div>
    </Col>
  );
}
  export default Counter;