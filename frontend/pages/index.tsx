import type { NextPage } from "next";
import React from "react";

// components
import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProjectsSection from "../components/home/ProjectsSection";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguero | Home</title>
      </Head>
      <HeroSection />
      <AboutSection />
      <FeaturesSection/>
      <ProjectsSection/>
    </React.Fragment>
  );
};
export default Home;
