import React from "react";
import Col from 'react-bootstrap/Col';


function SkillList(props) {
  return (
    <Col xs={12} lg={{ span: 4, offset: 2 }}>
      <span aria-label={props.name} className={props.icon}></span>
        <h3>{props.name}</h3>
        <ul>
            {props.skills.map((skill,index) => {
                return (<li key={index}>{skill}</li>);
            })}
        </ul>
    </Col>
  );
}

export default SkillList;
