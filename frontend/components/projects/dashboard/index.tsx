import React, { useState, useEffect, useMemo, useRef } from "react";
import type { ProjectsProps as DashboardProps } from "../../../pages/projects";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import { API } from "../../../api/axios";
import styles from "../../../styles/projects/dashboard/index.module.scss";

// components
import Categories from "./Categories";
import ProjectsTable from "./Projects";
import Modal from "../../modal/Modal";

export type Project = {
  _id: string;
  title: string;
  repoName: string;
  categories: string[];
};

const Dashboard: React.FC<DashboardProps> = ({ categories }) => {
  const [allProjects, setAllProjects] = useState<Project[] | []>([]);
  const [category, setCategory] = useState<string>("");
  const [isPending, setPending] = useState<boolean>(false);
  const [projectFetchError, setError] = useState<boolean | string>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [curSelectedProject, setCurSelectedProject] = useState<Project| null>(null);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const handleSetCategory = (value: string) => {
    // after click on any category, scroll to project table top
    if(typeof document !== 'undefined') {
      const projectsTableEl = document.querySelector<HTMLDivElement>(".projects-table");
      projectsTableEl?.scrollTop && projectsTableEl?.scrollTop > 0 && projectsTableEl?.scrollTo({ top: 0, behavior: "smooth" });
    }

    setCategory(value);
  };

  const curProjects: Project[] = useMemo(() => {
    // filter projects by category when category is changed
    if (category === "") return allProjects;

    const filterdProjects = allProjects.filter((project) => {
      return project.categories.includes(category);
    });

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
    return () => source.cancel("request cancled");
  }, []);

  return (
    <React.Fragment>
      <section id="dashboard" className={styles.dashboard}>
        <div className="row d-flex align-items-start justify-content-center">
          <Categories
            isPending={isPending}
            categories={categories}
            setCategory={handleSetCategory}
          />
          <ProjectsTable
            isPending={isPending}
            projectFetchError={projectFetchError}
            setCurSelectedProject={setCurSelectedProject}
            curProjects={curProjects}
            modalOpen={modalOpen}
            close={close}
            open={open}
          />
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {modalOpen && <Modal handleClose={close} curSelectedProject={curSelectedProject} />}
          </AnimatePresence>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
