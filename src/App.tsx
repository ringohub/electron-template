import { CssBaseline, ZeitProvider } from "@zeit-ui/react";
import React from "react";
import DragSpace from "./components/drag-space/drag-space";
import { ThemeContext, useTheme } from "./contexts/theme-context/theme-context";
import Home from "./pages/Home/Home";
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Editor from "./pages/Editor/Editor";

const App = () => {
  const theme = useTheme();

  const location = useLocation();
  console.dir(location);

  return (
    <ZeitProvider theme={{ type: theme.themeType }}>
      <CssBaseline />
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <DragSpace location={window.location.hash} />
          <div className="contents">
            <Router>
              <Switch>
                <Route exact path="/editor" component={Editor} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
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
