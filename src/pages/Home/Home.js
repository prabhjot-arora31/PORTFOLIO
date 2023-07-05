import React from "react";
import "./Home.css";
import MainHome from "../../components/Home/mainHome";
import Others from "../../components/Home/others";
function Home() {
  return (
    <>
    <div className="headMain">
      <MainHome />
      <Others />
    </div>

    </>
  );
}

export default Home;
