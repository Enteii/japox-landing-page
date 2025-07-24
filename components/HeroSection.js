import React, { useEffect, useState } from "react";
import TikTokFeed from "./TikTokFeed";

export default function HeroSection() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="header hero-bg relative pt-16 items-center flex flex-col overflow-hidden"
      style={{ minHeight: height }}
    >
      <img
        src="/img/TOP_banner01.png"
        alt="Top banner"
        className="w-full max-h-60 object-contain"
      />
      <div className="container mx-auto flex flex-wrap items-start px-4">
        <div className="w-full md:w-6/12 px-4">
          <div className="pt-32 sm:pt-0 text-left">
            <h2 className="hero-title font-semibold text-4xl text-red-600">
              JAPOX - Premium Japanese Performance
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-200">
              JAPOX Corporation (ジャポックス株式会社) is Japan's most innovative
              used car export company. Follow us on TikTok for the latest
              vehicle updates and promotions.
            </p>
            <div className="mt-12">
              <a
                href="https://www.tiktok.com/@japox_corp"
                target="_blank"
                rel="noopener noreferrer"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 hover:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Follow on TikTok
              </a>
              <a
                href="https://www.japox.com/"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 hover:bg-gray-600 active:bg-gray-500 uppercase text-sm shadow hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Cars
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4 mt-10 md:mt-32">
          <TikTokFeed />
        </div>
      </div>
    </section>
  );
}

