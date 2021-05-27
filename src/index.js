import React from "react";
import ReactDOM from "react-dom";
import "./styles/globals.css";
import Router from "./routers";
import "./index.css";
// このコメントは消してください
// あいいうえお

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
