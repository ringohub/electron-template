import { render } from "@testing-library/react";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Home from "./Home";

test("renders learn react link", () => {
  const { getByText } = render(
    <Router>
      <Home />
    </Router>
  );
  const linkElement = getByText(/Hello React with Electron/i);
  expect(linkElement).toBeInTheDocument();
});
