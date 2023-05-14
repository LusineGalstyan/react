import {useRef, useState} from 'react';
import { Button, Form } from 'react-bootstrap/';

function Contact(){
const inputRef = useRef(null);
const [value, setValue] = useState('');

const handleClick = ()=>{
    console.log(inputRef.current.value);
    inputRef.current.value = '';
};

    return(
        <div className="container">
            <div className="row">
                <div className="col-8">
                <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>*Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={value} onChange={(e)=>setValue(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>*Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" ref={inputRef}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your text</Form.Label>
        <Form.Control as="textarea" placeholder="Your text" />
        
      </Form.Group>

      
      
      <Button variant="primary" type="submit" onClick={handleClick}>
        Send
      </Button>
    </Form>
                </div>
            </div>
        </div>
        
    )
}
export default Contact;