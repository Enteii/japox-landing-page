/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroSection from "components/HeroSection";
import CompanySection from "components/CompanySection";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <HeroSection />
      <CompanySection />
      <Footer />
    </>
  );
}
