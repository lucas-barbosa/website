import type { NextPage } from "next";
import React from "react";

// components
import Head from "next/head";
import BackToTop from "../components/layout/BackToTop";
import FeatureSection from "../components/home/FeatureSection";
import HeroSection from "../components/home/HeroSection";
import ContactSection from "../components/home/ContactSection";
import CountsSection from "../components/home/CountsSection";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alhashmicode | Home</title>
      </Head>
      <HeroSection />
      <FeatureSection />
      <ContactSection />
      <BackToTop />
    </React.Fragment>
  );
};
export default Home;
