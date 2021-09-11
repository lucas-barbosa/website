import type { NextPage } from "next";
import React from "react";

// components
import Head from "next/head";
import Dashboard from "../components/services/dashboard";
import HeroSection from "../components/services/heroSection";

const DigitalService: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguerocode | Digital Services</title>
      </Head>
      <HeroSection />
      <Dashboard />
    </React.Fragment>
  );
};

export default DigitalService;
