import React from "react";
import Container from 'react-bootstrap/Container';


function Contact() {
  return (
    <div>
      <Container fluid id="contact" className="contact-me">
        <h2 className="section-title">Get In Touch</h2>
            <h3>Have questions for me about my experience or work areas?</h3>
            <a className="btn" href="mailto:jenny@thetechpm.com">Contact Me</a>
      </Container>
    </div>
  );
}

export default Contact;
