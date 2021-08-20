import type { NextPage } from "next";
import React from "react";

// components

import Head from "next/head";
import BackToUp from "../components/BackToUp";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import CountsSection from "../components/CountsSection";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alhashmicode | Home</title>
      </Head>
      <HeroSection />
      <CountsSection />
      <FeatureSection />
      <ContactSection />
      <BackToUp />
    </React.Fragment>
  );
};
export default Home;
