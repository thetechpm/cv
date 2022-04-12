import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function WorkItem(props) {
  return (
    <Row className="mb-5">
        <Col xs={4} md={2}>
            <a href={props.link}><img className="work-logo" src={props.logoSrc} alt={props.company} /></a>
        </Col>
        <Col>
            <h3>{props.company}</h3>
            <h4>{props.title}</h4>
            <p><em>{props.timeperiod}</em></p>
            <ul>
                {props.details.map((item,index) => {
                    const {primary, secondary} = item;

                    return (<div key={index}><li>{primary}</li><ul>{secondary.map((subItem, subIndex) => {
                        return <li key={subIndex}>{subItem}</li>;
                    })}</ul></div>);
                })}
            </ul>
        </Col>
    </Row>
  );
}

export default WorkItem;
