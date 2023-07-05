import React from "react";

function Hamburger(props) {
  return (
    <img
      onClick={props.click}
      src={require("../../assets/images/hamburger_menu.png")}
      className={props.classnameis}
      width={props.widthis}
    />
  );
}

export default Hamburger;
