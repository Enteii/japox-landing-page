import React from "react";
import useScrollReveal from "./useScrollReveal";

export default function InfoSection({ icon, title, text, image }) {
  const revealRef = useScrollReveal();
  return (
    <div
      ref={revealRef}
      className="info-section fade-up-scroll flex items-start"
    >
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
          className="ml-4 w-24 h-24 object-cover rounded"
        />
      )}
    </div>
  );
}
