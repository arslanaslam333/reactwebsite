// CustomCursor.js

import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Import your cursor styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-container"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
};

export default CustomCursor;
