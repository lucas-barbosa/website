import type { NextPage } from "next";
import React from "react";

export const config = { amp: "hybrid" }

// components
import Head from "next/head";
import Dashboard from "../components/services/dashboard";
import HeroSection from "../components/services/heroSection";

const DigitalService: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguerocode | Digital Services</title>
        <meta title="Alguerocode Digital Services"/>
        <meta
          name="keywords"
          content="digital services, products, freelancing, programming, alguerocode, alguero"
        />
        <meta
          name="description"
          content="figure out the service products you want. and contact me in contacts section or social media links above., get you dream projects done with my digital services, superior products."
        />
      </Head>
      <HeroSection />
      <Dashboard />
    </React.Fragment>
  );
};

export default DigitalService;
