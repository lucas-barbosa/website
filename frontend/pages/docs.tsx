import React from "react";
import type { NextPage } from "next";

// components
import Head from "next/head";
import ComingSoon from "../components/docs/comingSoon";

const Blogs: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguerocode | Documents</title>
        <meta title="Alguerocode Documents" />
        <meta name="keywords" content="coding, web development, programming, javascript, projects , github, profiles, documents, blogs, developer blogs,alguerocode, alguero"/>
        <meta name="description" content="Find out my interesting documents I wrote about programming, web development and coding."/>
      </Head>
      <ComingSoon />
    </React.Fragment>
  );
};

export default Blogs;
