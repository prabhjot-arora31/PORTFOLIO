import React from "react";

function Cross(props) {
  return (
    <h2 className={props.classnameis} onClick={props.click}>
      X
    </h2>
  );
}

export default Cross;
