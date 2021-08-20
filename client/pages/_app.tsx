import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";

// components

import Script from 'next/script';
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/assets/main.js" crossOrigin="anonymous" defer></script>
        <link href="/images/favicon.png" rel="icon"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment> 
  );
}
export default MyApp;
