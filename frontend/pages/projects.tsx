import React from "react";
import type { NextPage } from "next";
import { API } from "../api/axios";
import type { GetStaticProps, GetStaticPropsContext } from "next";

export const config = { amp: "hybrid" }

// components
import Head from "next/head";
import HeroSection from "../components/projects/heroSection";
import Dashboard from "../components/projects/dashboard";

export interface ProjectsProps {
  categories: {
    _id: string;
    category: string;
    projectsCount: number;
  }[];
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let categories;
  try {
    const res = await API.get("/categories");
    categories = res.data;
  } catch (error: any) {
    console.log(error);
  }

  return {
    props: {
      categories,
    },
  };
};

const Projects: NextPage<ProjectsProps> = ({ categories }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguerocode | Projects</title>
        <meta title="Alguerocode Projects" />
        <meta
          name="keywords"
          content="coding, web development, programming, javascript, projects , github, profiles,alguerocode, alguero"
        />
        <meta
          name="description"
          content="find out my projects I made in web development and see my github profile, skill I have, alguerocode"
        />
      </Head>
      <HeroSection />
      <Dashboard categories={categories} />
    </React.Fragment>
  );
};

export default Projects;
