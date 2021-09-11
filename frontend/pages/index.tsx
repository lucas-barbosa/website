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
        <meta title="Alguerocode Home" />
        <meta
          name="keywords"
          content="coding, web development, programming, javascript, projects , github, profiles, Home, landing page,alguerocode, alguero"
        />
        <meta
          name="description"
          content="alguerocode landing page, figure out the intersting things about me , projects, products, documents, tools and languages I use in web developemnt, coding and programming ,alguerocode"
        />
      </Head>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection />
      <DocsSection />
    </React.Fragment>
  );
};
export default Home;
