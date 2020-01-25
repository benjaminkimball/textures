import React from "react";
import { render } from "react-dom";

import { Circles, Lines, Paths } from "./components/textures";

const App = () => (
  <svg viewBox="0 0 300 100" width="300" height="100">
    <Lines id="lines1" background="white" lighter orientation="1/8" />
    <circle cx="25%" cy="50%" r="50" fill="url(#lines1)" />

    <Circles id="circles1" background="white" lighter thicker />
    <circle cx="50%" cy="50%" r="50" fill="url(#circles1)" />

    <Paths id="paths1" background="white" lighter type="crosses" />
    <circle cx="75%" cy="50%" r="50" fill="url(#paths1)" />

    <text
      x="50%"
      y="65%"
      style={{ fontSize: "54px", fontWeight: "bold" }}
      textAnchor="middle"
    >
      textures
    </text>
  </svg>
);

render(<App />, document.getElementById("root"));
