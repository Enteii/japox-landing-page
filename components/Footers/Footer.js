import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-8 pb-4">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
        >
          <polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="w-full px-4 mx-auto text-center">
          <div className="text-sm text-gray-400 font-semibold py-2">
            Copyright © 2025 JAPOX by{' '}
            <a href="https://japox.jp/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              JAPOX
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
