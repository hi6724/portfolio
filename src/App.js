import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Reset } from "styled-reset";
export default function App() {
  return (
    <>
      <div>
        <Reset />
        <Header />
        <Outlet />
      </div>
    </>
  );
}
