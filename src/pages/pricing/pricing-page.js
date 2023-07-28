import React from "react";
import Features from "../../components/base/landing/features";
import FooterLanding from "../../components/base/landing/footer";
import FormDemo from "../../components/base/landing/form";
import Hero from "../../components/base/landing/hero";
import Testimonials from "../../components/base/landing//testimonials";
import Navbar from "../../components/base/landing/navbar";
import WebAnalysis from "../../components/base/landing/webanalisys";
import Pricing from "../../components/base/landing/pricing";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Pricing />
      <FormDemo />
      <FooterLanding />
    </>
  );
};

export default PricingPage;
