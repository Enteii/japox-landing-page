/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="hero">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="hero-content">
          <h1 className="logo">JAPOX</h1>
          <p className="tagline">Calidad focus on Premium</p>

          <div className="company-info">
            <h2 className="company-title">Premium Japanese Used Car Export</h2>
            <p className="company-description">
              JAPOX Corporation (ジャポックス株式会社) is Japan's most innovative used car
              export company, revolutionizing the global automotive trade through cutting-edge
              e-commerce platforms and uncompromising quality standards.
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
                <h3>🏢 Company Heritage</h3>
                <p>
                  Founded on the vision to "export products that could not be covered by major trading
                  companies," JAPOX operates Japan's largest used car buying franchise. Led by Mr. Hirayama,
                  who inherited his father's pioneering spirit, we've transformed from a traditional trading
                  company into a technology-driven export platform.
                </p>
                <p>
                  Our innovative approach earned recognition from the Tokyo Metropolitan Government, with our
                  management innovation plan approved in November 2021.
                </p>
              </div>

              <div className="info-section">
                <h3>🌍 Global Reach & Markets</h3>
                <p>JAPOX delivers premium Japanese vehicles to customers across four continents:</p>
                <ul>
                  <li><strong>Africa:</strong> Our primary growth market, especially focused on countries transitioning to sustainable transportation</li>
                  <li><strong>Asia:</strong> Serving neighboring countries with high-demand Japanese automotive preferences</li>
                  <li><strong>South America:</strong> Expanding markets with growing appreciation for Japanese reliability</li>
                  <li><strong>Central Asia:</strong> Emerging markets seeking quality transportation solutions</li>
                </ul>
              </div>

              <div className="info-section">
                <h3>⚙️ Technology Innovation</h3>
                <p>As a pioneer in automotive e-commerce, JAPOX has developed proprietary software that transforms how Japanese used cars reach global markets. Our platform provides:</p>
                <ul>
                  <li>Seamless dealer registration and inventory management across PC and mobile</li>
                  <li>Direct connection between overseas buyers and Japanese dealers</li>
                  <li>Real-time auction access and bidding capabilities</li>
                  <li>Comprehensive export support and logistics coordination</li>
                </ul>
                <p>Partnering with NashTech, we've created an agile development environment that continuously evolves with market demands.</p>
              </div>

              <div className="info-section">
                <h3>🔍 Quality Assurance</h3>
                <p>Every vehicle in our inventory undergoes rigorous inspection by experienced, licensed engineers. Our quality standards include:</p>
                <ul>
                  <li>Comprehensive mechanical and safety testing</li>
                  <li>Detailed condition assessment and documentation</li>
                  <li>Verification of maintenance history and authenticity</li>
                  <li>Multi-point inspection covering engine, transmission, electrical, and body condition</li>
                </ul>
                <p>We source exclusively from Japan's most reputable dealers and auction houses, ensuring every vehicle meets our premium standards.</p>
              </div>

              <div className="info-section">
                <h3>📈 Market Leadership</h3>
                <p>In Japan's 1.2 million unit annual used car export market, JAPOX is strategically positioned to capture significant market share from traditional small and medium enterprises. Our ambitious goals include:</p>
                <ul>
                  <li>Expanding market size from 1.2M to 1.5M units annually</li>
                  <li>Increasing our share in the remaining 67% market not dominated by the top three companies</li>
                  <li>Leading the digital transformation of Japan's automotive export industry</li>
                </ul>
              </div>

              <div className="info-section">
                <h3>🎯 Mission & Vision</h3>
                <p>JAPOX exists to enrich lives globally through innovative automotive distribution. We're breaking traditional barriers by:</p>
                <ul>
                  <li>Democratizing access to premium Japanese vehicles worldwide</li>
                  <li>Creating sustainable solutions for Japan's automotive transition to electric vehicles</li>
                  <li>Building bridges between Japanese craftsmanship and global transportation needs</li>
                  <li>Contributing to environmental sustainability through vehicle lifecycle optimization</li>
                </ul>
              </div>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🚗</span>
                <div className="feature-title">Premium Inventory</div>
                <div className="feature-text">Curated selection from Japan's top dealers and auction houses</div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔧</span>
                <div className="feature-title">Expert Inspection</div>
                <div className="feature-text">Licensed engineers ensure every vehicle meets our quality standards</div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌐</span>
                <div className="feature-title">Digital Innovation</div>
                <div className="feature-text">Cutting-edge platform connecting global buyers with Japanese dealers</div>
              </div>
            </div>
          </div>

          <div className="social-links mt-8">
            <a href="https://www.tiktok.com/@japox_corp" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 48 48" fill="currentColor">
                <path d="M34.8 13.5c-3.3-1.3-5.7-4.4-5.7-8V4h-5.2v27.1c0 2.5-2 4.6-4.4 4.6-2.5 0-4.5-2-4.5-4.6 0-2.5 2-4.5 4.5-4.5.5 0 1 .1 1.5.3v-5.5c-.5-.1-1-.1-1.5-.1-5.5 0-9.9 4.5-9.9 9.9 0 5.5 4.4 9.9 9.9 9.9 5.4 0 9.8-4.4 9.8-9.9V21c2.1 1.5 4.7 2.4 7.4 2.4V17c-1.4 0-2.9-.3-4.2-.9z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/japanesecarexporterjapox" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/japox_corporation/" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.4s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://x.com/japox_corp" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCy7vXAkmqBbiIVzr9WGehlA/featured" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/japox-corporation/" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
