import type { NextPage } from "next";
import React, { Fragment } from "react";

// components

import BackToUp from "../components/BackToUp";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeroSection/>
      <FeatureSection/>
      <BackToUp/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
