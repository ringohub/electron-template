import React, { useState } from "react";
import DragSpace from "../../components/drag-space/drag-space";
import ElectronLogo from "../../components/electron-logo/electron-logo";
import ReactLogo from "../../components/react-logo/react-logo";
import {
  CssBaseline,
  ZeitProvider,
  Text,
  Toggle,
  Spacer,
} from "@zeit-ui/react";
import { Sun, Moon } from "@zeit-ui/react-icons";

const App = () => {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((lastThemeType) =>
      lastThemeType === "dark" ? "light" : "dark"
    );
  };
  return (
    <ZeitProvider theme={{ type: themeType }}>
      <CssBaseline />
      <div className="App">
        <DragSpace />
        <div className="contents">
          <div className="hello">
            <ReactLogo />
            <div className="message">
              <Text>Hello React with Electron</Text>
            </div>
            <ElectronLogo />
          </div>
          <div className="theme-ctrl">
            <Moon size={16} />
            <Spacer inline x={0.35} />
            <Toggle onChange={switchThemes} />
            <Spacer inline x={0.35} />
            <Sun size={16} />
          </div>
        </div>
        <style jsx>{`
          .theme-ctrl {
            display: flex;
            align-items: center;
          }
          .hello .message {
            margin-right: 8px;
          }
          .hello {
            display: flex;
            align-items: center;
          }
          .App {
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
    </ZeitProvider>
  );
};

export default App;
