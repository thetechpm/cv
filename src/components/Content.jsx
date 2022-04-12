import React from "react";
import Container from 'react-bootstrap/Container';
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";



function Content() {
  

  return (
      <Container fluid className="middle-container">
        <About />
        <Work />
        <Skills />
        <Contact />
      </Container>

  );
}

export default Content;
