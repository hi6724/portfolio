import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Introduce from "./screens/Introduce";
import Portfolio from "./screens/Portfolio";
import Project from "./screens/Project";
import NotFound from "./screens/NotFound";

export default function Router() {
  const location = useLocation();
  return (
    <div style={{ overflowX: "hidden", position: "relative", width: "100vw", height: "100vh" }}>
      <AnimatePresence>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/project/:id" element={<Project />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
