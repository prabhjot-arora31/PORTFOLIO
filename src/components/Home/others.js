import React from "react";

function Others() {
  return (
    <div className="other">
      <div className="skills1">
        <h3 style={{ textAlign: "center", marginBottom: "1.9rem" }}>Skills</h3>
        <div className="skills">
          <div className="techskills">
            <h4 style={{ marginBottom: "0.7rem", textAlign: "center" }}>
              Tech Skills.
            </h4>
            <div style={{ lineHeight: 2 }}>
              <ul
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  padding: "0.7rem",
                  justifyContent: "center",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>ASP.NET</li>
                <li>Java</li>
                <li>NextJs</li>
              </ul>
            </div>
          </div>
          <div className="softskills">
            <h4 style={{ marginBottom: "0.7rem", textAlign: "center" }}>
              Soft Skills
            </h4>
            <div style={{ lineHeight: 2 }}>
              <ul
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  padding: "0.7rem",
                  justifyContent: "center",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                <li>Good Listener</li>
                <li>Keen Observer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hobbies1">
        <h3 style={{ textAlign: "center", marginBottom: "1.9rem" }}>Hobbies</h3>
        <div className="hobbies">
          <div>
            <ul
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                padding: "0.7rem",
                justifyContent: "center",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
              }}
            >
              <li>Reading</li>
              <li>Drawing</li>
              <li>Swimming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Others;
