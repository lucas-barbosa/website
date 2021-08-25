import React from "react";
import type {NextPage} from 'next';


// components
import Head from "next/head";
import CountsSection from "../components/home/CountsSection";


const Projects:NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguero | Projects</title>
      </Head>

      <CountsSection />
    </React.Fragment>
  );
};

export default Projects;
