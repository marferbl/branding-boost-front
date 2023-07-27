import React from "react";
import Features from "../../components/base/landing/features";
import FooterLanding from "../../components/base/landing/footer";
import FormDemo from "../../components/base/landing/form";
import Hero from "../../components/base/landing/hero";
import Testimonials from "../../components/base/landing//testimonials";
import Navbar from "../../components/base/landing/navbar";
import WebAnalysis from "../../components/base/landing/webanalisys";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WebAnalysis />
      <Testimonials />
      <FormDemo />
      <FooterLanding />
    </>
  );
};

export default LandingPage;
