import React from "react";
import { render } from "react-dom";

import { Circles, Lines } from "./components/textures";

const App = () => (
  <svg viewBox="0 0 200 100" width="200" height="100">
    <Lines id="lines1" orientation="1/8" />
    <circle cx="25%" cy="50%" r="50" fill="url(#lines1)" />

    <Circles id="circles1" background="white" thicker />
    <circle cx="50%" cy="50%" r="50" fill="url(#circles1)" />
  </svg>
);

render(<App />, document.getElementById("root"));
