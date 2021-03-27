import React from 'react'
import './styles/Payment.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import arrow from './assets/down-arrow.svg'
import Dropdown from 'react-bootstrap/Dropdown'



function Payment() {

    

    return (
        <div className = 'wrapper'>
            <Container className = 'container'>
                <Row className="justify-content-md-center">
                    <Col md="auto" className = 'class-container'>
                        <Container >
                            <Row>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="Hello"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Dropdown Button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <img className='img-class' style={{width : "10%"}} src= {arrow} />
                                </Col>
                            </Row>
                               <Row>
                                    <Col>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                placeholder="Hello"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Append>
                                                <Button variant="outline-secondary">Button</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Col>
                              </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Payment
