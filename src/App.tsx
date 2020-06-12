import React from "react";
import reactLogo from "./react-logo.svg";
import electronLogo from "./electron-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <p>
          <img src={reactLogo} className="App-logo" alt="logo" />
          Hello React with Electron
          <img src={electronLogo} className="App-logo" alt="electron-logo" />
        </p>
      </header>
    </div>
  );
}

export default App;
