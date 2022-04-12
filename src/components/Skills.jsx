import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dots from "./Dots";
import SkillList from "./SkillList";
import skillData from "../skill-data";


function Skills() {
  return (
    <div>
      <Container fluid id="skills" >
        <h2 className="section-title">Skills</h2>
        <Row className="justify-content-md-center">
            {skillData.map(list => {
                return <SkillList key={list.id} name={list.name} skills={list.skills} icon={list.icon} />
            })}  
        </Row>
        <Dots />
      </Container>
    </div>
  );
}

export default Skills;
