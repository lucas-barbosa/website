import type { NextPage } from "next";
import React from "react";

// components
import Head from "next/head";
import BackToTop from "../components/layout/BackToTop";
import FeatureSection from "../components/home/FeatureSection";
import HeroSection from "../components/home/HeroSection";
import ContactSection from "../components/home/ContactSection";
import AboutSection from "../components/home/AboutSection";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguero | Home</title>
      </Head>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <ContactSection />
      <BackToTop />
    </React.Fragment>
  );
};
export default Home;
