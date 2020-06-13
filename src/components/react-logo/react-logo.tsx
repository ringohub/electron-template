import React from "react";
import logo from "./react-logo.svg";

const ReactLogo = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <style jsx>{`
        img {
          display: inline;
          height: 1.3rem;
        }
      `}</style>
    </>
  );
};

export default ReactLogo;
