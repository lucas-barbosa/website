import React from "react";
import type { NextPage } from "next";
import { API } from "../api/axios";
import type {
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

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

  projects: {
    _id:string;
    title: string;
    repoName: string;
    categories: string[];
  }[];
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let categories;
  let projects;

  const fetchCategories = new Promise(async (resolve, reject) =>{
    try {
        const res = await API.get("/categories");
        resolve(res.data);
    } catch (error) {
        reject(error.message);
    }
  })

  const fetchProjects = new Promise(async (resolve, reject) =>{
    try {
        const res = await API.get("/projects");
        resolve(res.data);
    } catch (error) {
        reject(error.message);
    }
  })
  try {
    const values = await Promise.all([fetchCategories, fetchProjects]);
    [categories, projects] = values;

  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      categories,
      projects
    },
  };
};

const Projects: NextPage<ProjectsProps> = ({
  categories,
  projects,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguero | Projects</title>
        <link rel="stylesheet" href="/styles/projects.css" />
      </Head>
      <HeroSection />
      <Dashboard categories={categories} projects={projects} />
    </React.Fragment>
  );
};

export default Projects;
