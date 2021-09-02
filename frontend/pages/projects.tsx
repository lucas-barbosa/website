import React from "react";
import type { NextPage } from "next";
import { API } from "../api/axios";
import type { GetStaticProps, GetStaticPropsContext } from "next";

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
  } catch (error) {
    console.log(error.message);
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
        <title>Alguero | Projects</title>
      </Head>
      <HeroSection />
      <Dashboard categories={categories} />
    </React.Fragment>
  );
};

export default Projects;
