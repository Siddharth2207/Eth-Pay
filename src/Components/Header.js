import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';  
import './styles/Header.css'
import logo from './assets/ethereum.png'
import wallet from './assets/wallet.png'

function Header() {

    const [address , setAddress] = useState('')
    const [balance , setBalance] = useState('') 
    const [walletConnected , setConnection] = useState(false)


    const WalletDisplay = () => {
        return(
            <Container className = 'wallet-container'>
                <Row className = 'wallet-container-row'>    
                    <Col  className = 'wallet-container-col1'>
                        <text className = 'wallet-balance' >0 ETH <span>0xE300...2499</span></text>
                    </Col>  
                </Row>
            </Container>
        )
    }

    return (
        <Navbar className = 'header-wrapper' fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"   
            />
            <span className="header-text"><span>ETH</span> - Pay</span>
            </Navbar.Brand>
            <Nav className="nav-links">
                <Nav.Link href="#home"><span>Home</span></Nav.Link>
                <Nav.Link href="#home"><span>WhitePaper</span></Nav.Link>
                <Nav.Link href="#features"><span>Payment</span></Nav.Link>
            </Nav>
            
            <Container className = "container1"> 

                {walletConnected ? <WalletDisplay /> : <Button className = "button-style" onClick = {(e) =>
                     setConnection(true)
                 }>Connect Your Wallet</Button> }

            </Container>    
            

        </Navbar>
    )
}

export default Header
