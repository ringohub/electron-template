import React from "react";
import logo from "./electron-logo.svg";

const ElectronLogo = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <style jsx>{`
        img {
          height: 1.2rem;
        }
      `}</style>
    </>
  );
};

export default ElectronLogo;
