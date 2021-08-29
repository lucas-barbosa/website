import type { AppProps } from "next/app";
import React from "react";

// styles
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective-subtle.css"
import "tippy.js/themes/light.css";
import "../styles/globals.scss";

// components
import Head from "next/head";
import Layout from "../components/layout/layout";

// store
import store from "../store/store";
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/images/favicon.png" rel="icon"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
      </Head>
      <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    </React.Fragment>
  );
}
const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
