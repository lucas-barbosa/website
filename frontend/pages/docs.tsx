import React from "react";
import type { NextPage } from "next";

// components
import Head from "next/head";
import ComingSoon from "../components/docs/comingSoon";

const Blogs:NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguero | Documents</title>
      </Head>
        <ComingSoon/>
    </React.Fragment>
  );
};

export default Blogs;
