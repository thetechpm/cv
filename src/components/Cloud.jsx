import React from "react";

function Cloud(props) {
    let cloudClass = "fa-solid fa-cloud fa-7x cloud " + props.type;
    return <span style={{color: props.cloudColor}} className ={cloudClass} onClick={props.onColor} />;
}

export default Cloud;