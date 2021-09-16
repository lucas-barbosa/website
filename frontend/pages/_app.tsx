import type { AppProps } from "next/app";
import React from "react";

// styles
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective-subtle.css";
import "tippy.js/themes/light.css";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

// components
import Head from "next/head";
import Layout from "../components/layout/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="7UvOUxx4cwvdtx_nYa_cpI0ieyyf6higqA0ofqdYPGo" />
        <link href="/images/favicon.png" rel="icon"/>
        <meta
          name="keywords"
          content="coding, web development, programming, javascript, projects , github, profiles, personal website, alguerocode, alguero"
        />
        <meta
          name="description"
          content="this my personal website my name is salah alhashmi and my nick name is alguerocode,
         I am backend and frontend web developer i can help you to get you dream projects done "
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
