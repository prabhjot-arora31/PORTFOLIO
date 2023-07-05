import React from "react";

function Others() {
  return (
    <div className="other">
      <div className="skills1">
        <h3 style={{ textAlign: "center", marginBottom: "1.9rem" }}>Skills</h3>
        <div
          className="skills"
          // style={{
          //   backgroundImage: URL(
          //     "data:image/png;base64,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"
          //   ),
          // }}
        >
          {/* overflow: "hidden", */}
          <div
            className="techskills"
            style={{
              overflowX: "hidden",
            }}
          >
            <div
              className="diff"
              style={{
                position: "absolute",
                zIndex: -1,
                objectFit: "cover",
                width: "280px",
                // height: "100%",
                height: "197px",
                // opacity: 0.8,
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="data:image/png;base64,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"
              />
            </div>

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
            <div
              className="diff"
              style={{
                position: "absolute",
                zIndex: -1,
                objectFit: "cover",
                width: "280px",
                // height: "100%",
                height: "92px",
                // opacity: 0.8,
              }}
            >
              <img
                style={{ width: "100%", height: "100%", top: "0.2rem" }}
                src="data:image/jpeg;base64,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"
              />
            </div>
            <h4
              style={{
                marginBottom: "0.7rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
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
        <div className="normal" style={{ padding: "0.7rem" }}>
          <ul>
            <li>Reading</li>
            <li>Swimming</li>
            <li>Drawing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Others;