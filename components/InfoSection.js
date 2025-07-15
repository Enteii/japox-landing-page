import React from "react";
import useScrollReveal from "./useScrollReveal";

export default function InfoSection({ icon, title, text }) {
  const revealRef = useScrollReveal();
  return (
    <div ref={revealRef} className="info-section fade-up-scroll">
      <h3 className="flex items-center mb-2">
        <i className={`fas ${icon} mr-2`} /> {title}
      </h3>
      <p className="info-text">{text}</p>
    </div>
  );
}
