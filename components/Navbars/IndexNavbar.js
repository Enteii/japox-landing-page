import React from "react";
import Link from "next/link";
// components


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-900 backdrop-blur border-b border-red-800 shadow-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" legacyBehavior>
              <a
                className="text-red-600 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                JAPOX
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-gray-900 backdrop-blur lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="text-gray-300 hover:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://japox.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-gray-400 fas fa-info-circle text-lg leading-lg mr-2" />{" "}
                  About
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="text-gray-300 hover:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.japox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-gray-400 fas fa-shopping-cart text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Buy Cars</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-xs font-bold uppercase shadow hover:shadow-lg flex items-center ml-3 mb-3 lg:mb-0"
                  href="https://www.tiktok.com/@japox_corp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-tiktok mr-2"></i> TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
