import React from "react";
import Container from 'react-bootstrap/Container';
import Dots from "./Dots";
import WorkItem from "./WorkItem";
import work from "../workExperience";


function Work() {
  return (
    <div>
      <Container fluid id="work" className="text-left">
        <h2 className="section-title">Current roles</h2>
        {work.map((item) =>{
            return <WorkItem key={item.id} company={item.company} title={item.title} timeperiod={item.timeperiod} link={item.link} logoSrc={item.logoSrc} details={item.details} />
        })}
        <Dots />
      </Container>
    </div>
  );
}

export default Work;
