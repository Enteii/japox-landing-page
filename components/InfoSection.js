import React from "react";
import useScrollReveal from "./useScrollReveal";

export default function InfoSection({ icon, title, text, image, alignRight }) {
  const revealRef = useScrollReveal();
  const containerClasses = `info-section fade-up-scroll flex items-start ${
    alignRight ? "flex-row-reverse text-right" : ""
  }`;
  const imgSpacing = alignRight ? "mr-4" : "ml-4";
  return (
    <div ref={revealRef} className={containerClasses}>
      <div>
        <h3 className="flex items-center mb-2">
          <i className={`fas ${icon} mr-2`} /> {title}
        </h3>
        <p className="info-text">{text}</p>
      </div>
      {image && (
        <img
          src={`/img/${image}`}
          alt={`${title} illustration for JDM enthusiasts`}
          className={`${imgSpacing} w-24 h-24 object-cover rounded`}
        />
      )}
    </div>
  );
}
