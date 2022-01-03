import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Project from "./screens/Project";
import "./index.css";
import Router from "./Router";

ReactDOM.render(
  <div style={{ overflowX: "hidden", position: "relative" }}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
