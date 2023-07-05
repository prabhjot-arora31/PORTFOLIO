import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../components/Header/Logo";
import Hamburger from "../../components/Header/Hamburger";
import Links from "../../components/Header/Links/Links";
import Cross from "../../components/Header/Cross";
function Header() {
  const [links, setLinks] = useState("links");
  const [bodyBgColor, setBodyBgColor] = useState("false");
  const [showHamburger, setShowhamburger] = useState("hamburger");
  const [showCross, setShowCross] = useState("hide_cross");
  const [showLogo, setShowLogo] = useState("logoImg");
  const showMenu = () => {
    document.body.style.overflow = "hidden";
    setBodyBgColor("true");
    setLinks("vertical_links");
    setShowhamburger("hide_hamburger");
    setShowCross("show_cross");
    setShowLogo("hide_logo");
    // window.innerWidth == 989 ? setLinks("links") : setLinks("vertical_links");
    // window.innerWidth == 989
    //   ? console.log("equal 989")
    //   : console.log("not equal 989");
  };
  const hideMenu = () => {
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
    setBodyBgColor("false");
    setShowLogo("logoImg");
    setLinks("links");
    setShowhamburger("hamburger");
    setShowCross("hide_cross");
    // window.innerWidth == 989 ? setLinks("links") : setLinks("vertical_links");
  };
  function isMobileWidth() {
    return window.innerWidth < 750;
  }

  const [isMobile, setIsMobile] = useState(isMobileWidth());
  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(isMobileWidth());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div
        className="main"
        style={{
          backgroundColor: bodyBgColor === "true" ? "lightgray" : "white",
        }}
      >
        <Logo logo={showLogo} />
        <Hamburger
          click={showMenu}
          classnameis={showHamburger}
          widthis="30px"
        />
        <Links link={links} click={hideMenu} />
        <Cross classnameis={showCross} click={hideMenu} />
      </div>
    </>
  );
}

export default Header;
