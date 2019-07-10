import React from "react";
import { render } from "react-dom";

const App = props => <pre>{JSON.stringify(props, null, 2)}</pre>;

render(<App />, document.getElementById("root"));
