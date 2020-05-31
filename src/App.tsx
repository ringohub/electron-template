import React from "react";
import logo from "./logo.svg";
import elogo from "./electron-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
          <img src={logo} className="App-logo" alt="logo" />
          React with{" "}
          <img src={elogo} className="App-logo" alt="electron-logo" /> Electron.
        </p>
      </header>
      \
    </div>
  );
}

export default App;
