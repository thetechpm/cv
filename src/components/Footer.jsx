import React from "react";
import Container from 'react-bootstrap/Container';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <Container sticky="bottom" fluid className="bottom-container pt-4 pt-md-5 mt-auto mb-0">
            <p><a href="https://www.researchlead.com/"><img className="footer-image rl" src="media/researchlead.png" alt="Research Lead" /></a></p>
            <a href="https://www.linkedin.com/in/thetechpm/">
                <span aria-label="LinkedIn icon" className="fa-brands fa-linkedin-in social-icon footer-image fa-2x"></span>
            </a>
            <a href="https://twitter.com/thetechpm">
                <span aria-label="Twitter icon" className="fa-brands fa-twitter social-icon footer-image fa-2x"></span>
            </a>
            <p className="copyright">©{currentYear} Jenny Hunter.</p>
        </Container>
  );
}

export default Footer;