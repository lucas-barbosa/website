import React, { useState, useEffect, FormEvent, useMemo, useRef } from "react";
import type { ProjectsProps as DashboardProps } from "../../../pages/projects";
import axios from "axios";
import { API } from "../../../api/axios";
import styles from "../../../styles/projects/dashboard/index.module.scss";
import tippy from "tippy.js";

// components
import Categories from "./Categories";
import ProjectsTable from "./Projects";

export type Projects = {
  _id: string;
  title: string;
  repoName: string;
  categories: string[];
}[];

const Dashboard: React.FC<DashboardProps> = ({ categories }) => {
  const [allProjects, setAllProjects] = useState<Projects | []>([]);
  const [category, setCategory] = useState<string>("");
  const [isPending, setPending] = useState<boolean>(false);
  const [projectFetchError, setError] = useState<boolean | string>(false);
  const projectsTableEl = useRef<HTMLDivElement | any>();
  // const [modalVisible, setModalVisible] = useState(false);

  const curProjects: Projects = useMemo(() => {
    // filter projects by category when category is changed
    if (category === "") return allProjects;

    const filterdProjects = allProjects.filter((project) => {
      return project.categories.includes(category);
    });

    // projects table and scroll to top
    if (projectsTableEl.current?.scrollTop > 0) {
      projectsTableEl.current?.scrollTo({ top: 0, behavior: "smooth" });
    }

    return filterdProjects;
  }, [category, allProjects]);

  useEffect(() => {
    // fetch projects data
    setPending(true);
    const source = axios.CancelToken.source();
    const headers = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    });
    API.get("/projects", {
      headers,
      cancelToken: source.token,
    })
      .then((res) => {
        setAllProjects(res.data);
        setPending(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setPending(false);
      });

    // add tooltip to projects image
    tippy(`.${styles.projectImg}`, {
      content: "<h6 class='text-muted'> 💌🙂 subscribe</h6>",
      animation: "perspective-subtle",
      placement: "bottom",
      theme: "light",
      maxWidth: 195,
      allowHTML: true,
      delay: [400, 0],
      hideOnClick: true,
    });
    return () => source.cancel("request cancled");
  }, []);

  return (
    <React.Fragment>
      <section id="dashboard" className={styles.dashboard}>
        <div className="row d-flex align-items-start justify-content-center">
          <Categories
            isPending={isPending}
            categories={categories}
            setCategory={setCategory}
          />
          <ProjectsTable
            isPending={isPending}
            projectsTableEl={projectsTableEl}
            projectFetchError={projectFetchError}
            curProjects={curProjects}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
