import { Component } from 'react';
import {Form, Container, Button, Row, Col, Card } from 'react-bootstrap';


class Todolist extends Component{
    
    
    render(){
      
        
        return (
            <div className='blTodolist'>
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={8} xs={12}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="text" placeholder="input text" className="mb-3"/>
                                
                                    <Form.Control as="textarea" rows={6} className="mb-3"/>
                                    
                                    <div className='d-grid d-md-flex justify-content-md-end'>
                                        <Button variant="success" type="submit">
                                            Add
                                        </Button>
                                    </div>

                                    
                                
                                </Form.Group> 
                            </Form>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={4} sm={6}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
        
                    
                </Container>

                
            </div> 
           
            );
    }
  } 
 
  export default Todolist;