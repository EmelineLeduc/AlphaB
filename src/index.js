import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector("#root")
);
