import type { NextPage } from "next";
import React from "react";

// components
import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import DocsSection from "../components/home/DocsSection";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguerocode | Home</title>
      </Head>
      <HeroSection />
      <AboutSection />
      <FeaturesSection/>
      <ProjectsSection/>
      <DocsSection/>
    </React.Fragment>
  );
};
export default Home;
