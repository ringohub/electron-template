import { CssBaseline, ZeitProvider } from "@zeit-ui/react";
import React from "react";
import DragSpace from "./components/drag-space/drag-space";
import { ThemeContext, useTheme } from "./contexts/theme-context/theme-context";
import Home from "./pages/Home/Home";

const App = () => {
  const theme = useTheme();

  return (
    <ZeitProvider theme={{ type: theme.themeType }}>
      <CssBaseline />
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <DragSpace />
          <div className="contents">
            <Home />
          </div>
          <style jsx>{`
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
          `}</style>
        </div>
      </ThemeContext.Provider>
    </ZeitProvider>
  );
};

export default App;
