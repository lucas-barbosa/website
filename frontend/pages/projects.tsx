import React from "react";
import type {NextPage} from 'next';


// components
import Head from "next/head";
import HeroSection from "../components/projects/heroSection";
import Dashboard from "../components/projects/dashboard";

const Projects:NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguero | Projects</title>
        <link rel="stylesheet" href="/styles/projects/hero.css" />
      </Head>
      <HeroSection />
      <Dashboard/>
    </React.Fragment>
  );
};

export default Projects;
