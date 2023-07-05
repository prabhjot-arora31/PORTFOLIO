import React, { useState } from "react";
import "./Experience.css";
function Experience() {
  const [expInfoShow, setExpInfoShow] = useState("expInfoHide");
  const showMoreInfo = () => {
    setExpInfoShow("expInfoShow");
  };
  return (
    <>
      <div className="exp">
        <h2 className="expHead">Experience</h2>

        <div className="expAll">
          <div className="expMain" onClick={showMoreInfo}>
            <div id="zealyug">
              <img src="data:image/png;base64,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" />
            </div>
            <div className="common">
              <h3>ZealYug</h3>
              <h4>Flutter App Intern</h4>
              <h4 style={{ fontWeight: "300" }}>03/02/2023 to 03/04/2023</h4>
              {expInfoShow === "expInfoHide" ? (
                <h5 className="info">Click for more info</h5>
              ) : null}
            </div>
          </div>
          <div id={expInfoShow}>
            <h2
              style={{
                fontSize: "1rem",
                marginTop: "0.7rem",
                marginBottom: "0.7rem",
              }}
            >
              Following were my roles and responsibilities.
            </h2>
            <span style={{ fontWeight: "bold" }}> 1. </span> Responsible for
            developing an app for the company named ZealYug using Flutter.{" "}
            <br /> <span style={{ fontWeight: "bold" }}> 2. </span> Created
            responsive designs using the reference of figma design
            <button
              style={{
                marginTop: "0.8rem",
                padding: "0.6rem",
                borderRadius: "0.8rem",
                backgroundColor: "blue",
                color: "white",
                cursor: "pointer",
                border: "none",
              }}
            >
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={require("../../assets/pdf/internship_certificate.pdf")}
              >
                Click here to download my Internship Certificate
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
