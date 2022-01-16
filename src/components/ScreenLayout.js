import { motion } from "framer-motion";
import React, { useState } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const pageStyle = {
  position: "absolute",
};

export default function ScreenLayout({ children }) {
  const [viewport, setViewport] = useState(window.innerHeight);
  window.addEventListener(
    "resize",
    function (event) {
      setViewport(event.target.innerHeight);
    },
    true
  );
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <div style={{ height: viewport - 5, width: "100vw" }}>{children}</div>
    </motion.div>
  );
}
