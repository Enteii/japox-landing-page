import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-4 pb-4">
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
