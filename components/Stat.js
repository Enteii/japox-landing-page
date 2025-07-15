import React from "react";
import useScrollReveal from "./useScrollReveal";

export default function Stat({ number, label }) {
  const revealRef = useScrollReveal();
  return (
    <div ref={revealRef} className="stat fade-up-scroll">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
