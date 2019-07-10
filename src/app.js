import React from "react";
import { render } from "react-dom";

import LinesPattern from "./components/lines-pattern";

const App = () => (
  <svg viewBox="0 0 100 100" width="100" height="100">
    <LinesPattern id="lines1" orientation="1/8" />

    <circle cx="50%" cy="50%" r="49" fill="url(#lines1)" />
  </svg>
);

render(<App />, document.getElementById("root"));
