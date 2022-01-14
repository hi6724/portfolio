import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Project from "./screens/Project";
import "./index.css";
import Router from "./Router";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Reset />
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
