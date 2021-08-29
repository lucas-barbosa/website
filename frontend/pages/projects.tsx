import React from "react";
import type {NextPage} from 'next';


// components
import Head from "next/head";
import HeroSection from "../components/projects/heroSection";

const Projects:NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguero | Projects</title>
      </Head>

      <HeroSection />
    </React.Fragment>
  );
};

export default Projects;
