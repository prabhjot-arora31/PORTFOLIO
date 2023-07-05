import React from "react";
import { Link } from "react-router-dom";
import "./Links.css";
function Links(props) {
  return (
    <div className={props.link}>
      <Link to="/" className="heads" onClick={props.click}>
        <h3>Home</h3>
      </Link>
      <Link to="/eduexp" className="heads" onClick={props.click}>
        <h3>Education / Experience</h3>
      </Link>
      <Link to="projects" className="heads" onClick={props.click}>
        <h3>Projects</h3>
      </Link>
      <Link to="/services" className="heads" onClick={props.click}>
        <h3>Services</h3>
      </Link>
      <Link to="/contact" className="heads" onClick={props.click}>
        <h3>Contact</h3>
      </Link>
    </div>
  );
}

export default Links;
