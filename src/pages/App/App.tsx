import React from "react";
import "./App.css";
import DragSpace from "../../components/drag-space/drag-space";
import ElectronLogo from "../../components/electron-logo/electron-logo";
import ReactLogo from "../../components/react-logo/react-logo";

function App() {
  return (
    <div className="App">
      <DragSpace />
      <div className="contents">
        <div className="hello">
          <ReactLogo />
          <p>Hello React with Electron</p>
          <ElectronLogo />
        </div>
      </div>
      <style jsx>{`
        .hello p {
          margin-right: 8px;
        }
        .hello {
          display: flex;
          align-items: center;
        }
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
        .inline {
          display: inline;
        }
      `}</style>
    </div>
  );
}

export default App;
