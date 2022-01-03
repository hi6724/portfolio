import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Introduce from "./screens/Introduce";
import Portfolio from "./screens/Portfolio";
import Project from "./screens/Project";
export default function Router() {
  const location = useLocation();
  return (
    <div style={{ overflowX: "hidden", position: "relative", width: "100vw", height: "110vh" }}>
      <AnimatePresence>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="project" element={<Project />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}