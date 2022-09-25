import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js';
import { useState } from 'react';
//이미지 가져오기
//import 작명 from '이미지경로'

function App() {

  let [shoes, setShoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          
          {shoes.map(function(value, i){
            return (<Card shoes={value} i = {i}></Card>)
          })
        }

        </Row>
    </Container>
    </div>

  );
}

function Card(props){
  return (
    <Col md={4}>
            <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="80%"/>            
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}원</p>
          </Col>
  )
}

export default App;
