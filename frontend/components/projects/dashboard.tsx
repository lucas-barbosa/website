import React, { useState, useEffect, FormEvent, useMemo, useRef } from "react";
import type { ProjectsProps as DashboardProps } from "../../pages/projects";
import axios from "axios";
import { API } from "../../api/axios";
import styles from "../../styles/projects/dashboard.module.scss";
import tippy from "tippy.js";

// components
import Image from "next/image";
import AboutMe from "./AboutMe";

type Projects = {
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
  }, [category,allProjects]);

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
      maxWidth:195,
      allowHTML:true,
      delay:[400, 0],
      hideOnClick:true,
    });
    return () => source.cancel("request cancled");
  }, []);

  return (
    <React.Fragment>
      <section id="dashboard" className={styles.dashboard}>
        <div className="row d-flex align-items-start justify-content-center">
          <div className="container-lg col-md-12 col-lg-6 rounded pb-3">
            <AboutMe/>
            <div className="d-flex align-items-center justify-content-center">
              <h4 className={`${styles.titles} fs-3 text-center my-4 ms-2`}>
                BROWSE BY CATEGORIES
              </h4>
            </div>
            <div
              className="buttons d-flex flex-wrap justify-content-center"
              role="group"
            >
              {/* all category button (is seperate becuase we need empty id) */}
              <button
                id=""
                type="button"
                className={`m-1 p-2 ${styles.allButton}`}
                onClick={(e: FormEvent) => setCategory(e.currentTarget.id)}
                disabled={isPending}
              >
                All projects
              </button>

              {categories?.map((category) => (
                <button
                  id={category.category}
                  type="button"
                  className={`${styles.buttons} text-center m-1 p-2 ps-3`}
                  key={category._id}
                  disabled={isPending}
                  onClick={(e: FormEvent) => setCategory(e.currentTarget.id)}
                >
                  {category.category}
                  <span
                    className={`badge count ms-1 text-dark ${styles.count}`}
                  >
                    {category.projectsCount}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className={`overflow-scroll col-md-12 col-lg-6 rounded mt-md-0 mt-3 pb-3 ${styles.projects}`}
            ref={projectsTableEl}
          >
            <div className="d-flex align-items-center justify-content-center">
              <h4 className="text-start my-4 ms-2 fs-3">
                MY PROJECTS
              </h4>
            </div>
            <div
              className="buttons d-flex justify-content-center align-items-center flex-column"
              role="group"
            >
              {isPending ? (
                <div className="spinner-border text-dark mt-5" role="status" />
              ) : !projectFetchError ? (
                curProjects?.map((project) => (
                  <a
                    href={`https://github.com/alguerocode/${project.repoName}`}
                    className={`${styles.projectLink} my-2`}
                    rel="noreferrer"
                    target="_blank"
                    key={project._id}
                  >
                    <Image
                      unoptimized={true}
                      className="bg-white"
                      width="690"
                      height="200"
                      loader={({ src }) => src}
                      src={`https://gh-card.dev/repos/alguerocode/${project.repoName}.svg?fullname=`}
                      alt={`alguero github repository : ${project.repoName}`}
                    />
                  </a>
                ))
              ) : (
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <i className="bi bi-exclamation-triangle-fill text-danger fs-1"></i>
                  <p className="lead text-center text-danger">
                    {projectFetchError}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
