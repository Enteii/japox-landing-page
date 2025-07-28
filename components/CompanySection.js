import React from "react";
import FeatureItem from "./FeatureItem";
import InfoSection from "./InfoSection";
import Stat from "./Stat";

export default function CompanySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <img
          src="/img/005.png"
          alt="Premium Japanese Used Car Export for U.S. JDM enthusiasts"
          className="mx-auto mb-4 w-full max-w-md"
        />
        <p className="company-description">
          JAPOX Corporation (ジャポックス株式会社) revolutionizes the global automobile trade through cutting-edge e-commerce and uncompromising quality.
        </p>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:w-8/12">
            <div className="company-info">
              <div className="stats-row">
                <Stat number="1.2M+" label="Annual Market Units" />
                <Stat number="4" label="Continents Served" />
                <Stat number="2021" label="Tokyo Gov Approved" />
              </div>
              <div className="detailed-info">
                <InfoSection
                  icon="fa-building"
                  title="Company Heritage"
                  text="Founded to export vehicles beyond the reach of major trading companies, JAPOX now operates Japan's largest used car buying franchise."
                  image="002.png"
                />
                <InfoSection
                  icon="fa-globe-americas"
                  title="Global Reach & Markets"
                  text="Delivering premium Japanese vehicles across Africa, Asia, South America and Central Asia, with a focus on sustainable transportation."
                  image="003.png"
                  alignRight
                />
                <InfoSection
                  icon="fa-cogs"
                  title="Technology Innovation"
                  text="Our proprietary platform connects overseas buyers directly with Japanese dealers for real-time auctions and full export support."
                  image="004.png"
                />
              </div>
              <div className="features-grid">
                <FeatureItem
                  icon="fas fa-car-side"
                  title="Premium Inventory"
                  text="Curated selection from Japan's top dealers"
                />
                <FeatureItem
                  icon="fas fa-wrench"
                  title="Expert Inspection"
                  text="Licensed engineers ensure every vehicle meets our standards"
                />
                <FeatureItem
                  icon="fas fa-network-wired"
                  title="Digital Innovation"
                  text="Cutting-edge platform connecting global buyers"
                />
              </div>
            </div>
          </div>
          <aside className="md:w-4/12 md:pl-8 mt-10 md:mt-0">
            <div className="ad-container">
              <div>Most Popular Car</div>
              <a href="#" className="ad-link">View Listing</a>
            </div>
          </aside>
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
  );
}

