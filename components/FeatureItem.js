import React from "react";
import useScrollReveal from "./useScrollReveal";

export default function FeatureItem({ icon, title, text }) {
  const revealRef = useScrollReveal();
  return (
    <div ref={revealRef} className="feature-item fade-up-scroll">
      <i className={`${icon} feature-icon`} />
      <div className="feature-title">{title}</div>
      <div className="feature-text">{text}</div>
    </div>
  );
}
