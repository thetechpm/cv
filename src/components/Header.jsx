import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cloud from "./Cloud";
import SubTitle from "./SubTitle";


function Header() {
  const [color, setColor] = useState("#F5F5F5");
  const colors = ["#BD1465",  "#F5F5F5", "#364F6B", "#F0F0F0","#AEE1E1", "#D3E0DC"];

  function setRandomColor() {
    const randColor =  colors[Math.floor(Math.random()*colors.length)];
    setColor(randColor);
  }

  return (
    <div>
      <Navbar sticky="top" bg="#3FC1C9" variant="dark">
          <Container>
              <Navbar.Brand>The Tech PM</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#work">Work</Nav.Link>
                  <Nav.Link href="#skills">Skills</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      <Container fluid className="top-container">
          <Cloud type ="top-cloud" cloudColor={color} onColor={setRandomColor}  />
          <h1  style={{color:color}}>I'm Jenny Hunter</h1>
          <SubTitle text="a senior product manager" />
          <SubTitle text="a CTO and co-founder" />
          <SubTitle text="a woman in STEM" />
          <Cloud type ="bottom-cloud d-none d-md-block" cloudColor={color} onColor={setRandomColor} />
          <img className ="hero" src="%PUBLIC_URL%/media/path.png" alt="path" />
      </Container>
    </div>
  );
}

export default Header;
