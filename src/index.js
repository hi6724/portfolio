import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
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
