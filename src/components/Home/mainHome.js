import React from "react";

function MainHome() {
  return (
    <div className="mainHome">
      <div className="info">
        <h3
          style={{
            fontSize: "1.6rem",
            marginBottom: "1.1rem",
            textAlign: "center",
          }}
        >
          PRABHJOT VIKRAMJEET SINGH ARORA
        </h3>
        <div style={{ textAlign: "center", lineHeight: 2 }}>
          <h4>
            Hello World. I am a BCA student studying in SFS College , Seminary
            Hills, Nagpur. I am also a self-taught app/web developer having
            required skills and knowledge.
          </h4>
        </div>
        <div
          style={{ marginTop: "0.8rem", lineHeight: 2, textAlign: "center" }}
        >
          <h4>
            <span style={{ color: "blue" }}>Objective: </span>
            To obtain an entry-level Web/App Development position and utilize
            the educational qualifications obtained at SFS College.
          </h4>
        </div>
      </div>
      <div className="profileImg">
        <img src="https://movieflix31.netlify.app/profile.jpg" />
      </div>
    </div>
  );
}

export default MainHome;
