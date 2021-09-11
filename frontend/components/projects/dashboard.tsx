import React, { useState, useEffect, FormEvent } from "react";
import type { ProjectsProps as DashboardProps } from "../../pages/projects";
import axios from "axios";
import { API } from "../../api/axios";
import styles from "../../styles/projects/dashboard.module.scss";

// components
import Image from "next/image";

type Projects = {
  _id: string;
  title: string;
  repoName: string;
  categories: string[];
}[];

const Dashboard: React.FC<DashboardProps> = ({ categories }) => {
  const [curProjects, setCurProjects] = useState<Projects | []>([]);
  const [category, setCategory] = useState<string>("");
  const [isPending, setPending] = useState<boolean>(false);
  const [projectFetchError, setError] = useState<boolean | string>(false);
  useEffect(() => {
    setPending(true);
    const source = axios.CancelToken.source();
    const headers = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    });
    API.get(`/projects/${category}`, {
      headers,
      cancelToken: source.token,
    })
      .then((res) => {
        setCurProjects(res.data);
        setPending(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setPending(false);
      });
    return () => source.cancel("request cancled");
  }, [category]);

  return (
    <React.Fragment>
      <section id="dashboard" className={styles.dashboard}>
        <div className="row d-flex align-items-start justify-content-center">
          <div className="container-lg col-md-5 col-ms-8 rounded pb-3">
            <h4 className={`${styles.titles} fs-3 text-start my-2 ms-2`}>DISCOVER</h4>
            <p className="text-muted lead ms-3">
            discover my projects that I finished up in my development work line.
            </p>
            <h4 className={`${styles.titles} fs-3 text-start my-4 ms-2`}>
              BROWSE BY CATEGORIES
            </h4>
            <div
              className="buttons d-flex flex-wrap justify-content-start"
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
                  onClick={(e: FormEvent) => setCategory(e.currentTarget.id)}
                >
                  {category.category}
                  <span className={`badge count ms-1 text-dark ${styles.count}`}>
                    {category.projectsCount}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className={`overflow-scroll col-md-6 col-sm-8 rounded mt-md-0 mt-3 pb-3 ${styles.projects}`}
          >
            <h4 className={`${styles.titles} text-start my-4 ms-2 fs-3`}>
              MY PROJECTS
            </h4>
            <div
              className="buttons d-flex justify-content-center align-items-center flex-column"
              role="group"
            >
              {isPending ? (
                <div
                  className="spinner-border text-dark mt-5"
                  role="status"
                />
              ) : !projectFetchError ? (
                curProjects?.map((project) => (
                  <a
                    href={`https://github.com/alguerocode/${project.repoName}`}
                    className="github-link"
                    rel="noreferrer"
                    target="_blank"
                    key={project._id}
                  >
                    <Image
                      className={`{styles.img} border border-3 border-dark bg-white`}
                      unoptimized={true}
                      width="680"
                      height="180"
                      loader={({ src }) => src}
                      src={`https://gh-card.dev/repos/alguerocode/${project.repoName}.svg`}
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
