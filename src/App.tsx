import React from "react";
import reactLogo from "./react-logo.svg";
import electronLogo from "./electron-logo.svg";
import "./App.css";
import DragSpace from "./components/drag-space/drag-space";

function App() {
  return (
    <div className="App">
      <DragSpace />
      <div className="contents">
        <p>
          <img src={reactLogo} className="App-logo" alt="logo" />
          Hello React with Electron
          <img src={electronLogo} className="App-logo" alt="electron-logo" />
        </p>
      </div>
      <style jsx>{`
        .App {
          background-color: #282c34;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .contents {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

export default App;
