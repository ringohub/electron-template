import { default as MonacoEditor } from "@monaco-editor/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context/theme-context";

const Editor = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="container">
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="editor">
        <MonacoEditor theme={theme.themeType} language="javascript" />
      </div>
      <style jsx>{`
        .container {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .link {
          margin-left: 8px;
        }
        .editor {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export default Editor;
