import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import imag from './assets/trans2.jpg'
import imag3 from './assets/transfer.jpg'
import imag2 from './assets/chainlink.png'
import imag4 from './assets/blob_2.svg'
import 'bootstrap/dist/css/bootstrap.min.css';  
import './styles/Home.css'


function Home() {

    return (
       <>
            <Container className = "section1">
                <Row className = "section1-row">
                    <Col className = "section1-row-col1" >
                    <h1>Welcome To <span>ETH</span> - Pay</h1>
                        <h4>Send CryptoCurrencies to any UPI address .</h4>
                        <h4>Pay Instantly without going through exchange.</h4>
                    </Col>
                    <Col className = "section1-row-col2">
                        <img src={imag}></img> 
                    </Col>
                </Row>
            </Container>

            <Container className = "section2">
                <Row className = "section2-row">
                    <Col className = "section2-row-col1">
                        <img style = {{width  : "80%"}} src={imag2}></img> 
                    </Col>
                    <Col className = "section2-row-col2">
                        <p>Make <span>Crypto</span> to INR Payments instantly</p>
                        <h4>
                            With <span>Chainlink</span> powered on-chain Smart Contract interacting with a dedicated api for fiat transfer , your <span>Crypto-Payment </span>Transfer is processed instantaneoulsy  
                        </h4>
                    </Col>
                </Row>
            </Container>

            <Container className = "section3" >
                <Row className = "section3-row" >
                    <Col className = "section3-row-col1" >
                        <h4>With easy to use interface , you can make instant payments with three simple steps : </h4>
                        <ul>
                            <li>
                                <h4>Connect your <span>Wallet</span></h4>
                            </li>
                            <li>
                                <h4>Enter the <span>UPI Address</span>. </h4>  
                            </li>
                            <li>
                                <h4>Enter the <span>Amount</span> , and you are good to go .</h4> 
                            </li>
                        </ul>
                        <h4>Please Read the White-Paper for more details.</h4>
                         
                    </Col>
                    <Col className = "section3-row-col2">
                        <img style = {{width  : "100%"}} src={imag3}></img> 
                    </Col>
                </Row>
            </Container>

            <Container className = "section4">
                <Col md={{ span: 4, offset: 4 }}>
                 <Button className = "button-style">
                    Click Here Make Payments
                </Button>
                </Col>
            </Container>
            
        </>
    )
}

export default Home
