import React from "react";
import Container from 'react-bootstrap/Container';
import ProfilePicture from "./ProfilePicture";
import Dots from "./Dots";


function About() {
  return (
    <div>
      <Container fluid id="about" className="profile">
        <ProfilePicture />
        <h2 className="section-title">Hello</h2>
          <p className="intro"><em>Jenny graduated with highest honors from the Georgia Institute of Technology with a Bachelor's degree in Computer Engineering. She received a patent and was published for her work in rehabilitative medical technology. Jenny has several years experience in the software industry and most recently worked as a principal technical product management manager, where she managed a team of 5+ product managers and technical program managers and led the strategy for several product areas, translating the needs of customers into technical requirements for a major cloud computing provider.</em></p>
        <Dots />
      </Container>
    </div>
  );
}

export default About;
