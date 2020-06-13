import { Spacer, Text, Toggle, ZeitProvider } from "@zeit-ui/react";
import { Moon, Sun } from "@zeit-ui/react-icons";
import React, { useContext } from "react";
import ElectronLogo from "../../components/electron-logo/electron-logo";
import ReactLogo from "../../components/react-logo/react-logo";
import { ThemeContext } from "../../contexts/theme-context/theme-context";

const Home = () => {
  const theme = useContext(ThemeContext);
  const switchThemes = () =>
    theme.setTheme(theme.themeType === "dark" ? "light" : "dark");

  return (
    <div className="container">
      <ZeitProvider></ZeitProvider>
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
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
        }
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
        .inline {
          display: inline;
        }
      `}</style>
    </div>
  );
};

export default Home;
