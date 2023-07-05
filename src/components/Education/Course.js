import React from "react";

function Course(props) {
  return (
    <div className="courseMain">
      <div className={props.id == "providence" ? "imgContainer" : ""}>
        <img
          src={props.img}
          className={props.id == "providence" ? "providence" : ""}
        />
      </div>
      <div className="common">
        <h3>{props.course}</h3>
        <h4>{props.clg}</h4>
        <h4 style={{ fontWeight: "300" }}>{props.yr}</h4>
        <h5 style={{ fontWeight: "300" }}>{props.per}</h5>
      </div>
    </div>
  );
}

export default Course;
