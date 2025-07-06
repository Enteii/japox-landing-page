/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import TikTokFeed from "components/TikTokFeed";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header hero-bg relative pt-16 items-center flex h-screen max-h-860-px overflow-hidden">
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

      <section className="py-20">
        <div className="company-info">
          <h2 className="company-title">Premium Japanese Used Car Export</h2>
          <p className="company-description">
            JAPOX Corporation (ジャポックス株式会社) revolutionizes the global automobile trade through cutting-edge e-commerce and uncompromising quality.
          </p>
            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-number">1.2M+</span>
                <span className="stat-label">Annual Market Units</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">4</span>
                <span className="stat-label">Continents Served</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">2021</span>
                <span className="stat-label">Tokyo Gov Approved</span>
              </div>
            </div>
            <div className="detailed-info">
              <div className="info-section">
                <div className="info-image">Image</div>
                <div className="info-text">
                  <h3>🏢 Company Heritage</h3>
                  <p>
                    Founded to export vehicles beyond the reach of major trading companies, JAPOX now operates Japan's largest used car buying franchise.
                  </p>
                </div>
              </div>
              <div className="info-section">
                <div className="info-image">Image</div>
                <div className="info-text">
                  <h3>🌍 Global Reach & Markets</h3>
                  <p>
                    Delivering premium Japanese vehicles across Africa, Asia, South America and Central Asia, with a focus on sustainable transportation.
                  </p>
                </div>
              </div>
              <div className="info-section">
                <div className="info-image">Image</div>
                <div className="info-text">
                  <h3>⚙️ Technology Innovation</h3>
                  <p>
                    Our proprietary platform connects overseas buyers directly with Japanese dealers for real-time auctions and full export support.
                  </p>
                </div>
              </div>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🚗</span>
                <div className="feature-title">Premium Inventory</div>
                <div className="feature-text">Curated selection from Japan's top dealers</div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔧</span>
                <div className="feature-title">Expert Inspection</div>
                <div className="feature-text">Licensed engineers ensure every vehicle meets our standards</div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌐</span>
                <div className="feature-title">Digital Innovation</div>
                <div className="feature-text">Cutting-edge platform connecting global buyers</div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/japanesecarexporterjapox" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/japox_corporation/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com/japox_corp" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCy7vXAkmqBbiIVzr9WGehlA/featured" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/company/japox-corporation/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
      </section>
      <Footer />
    </>
  );
}
