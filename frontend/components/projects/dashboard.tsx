import React, { useState, useEffect, FormEvent } from "react";
import type { ProjectsProps as DashboardProps } from "../../pages/projects";
import axios from "axios";
import { API } from "../../api/axios";
import styles from "../../styles/projects/dashboard.module.css";

type Projects = {
  _id: string;
  title: string;
  repoName: string;
  categories: string[];
}[];

const Dashboard: React.FC<DashboardProps> = ({ categories }) => {
  const [curProjects, setCurProjects] = useState<Projects | []>([]);
  const [category, setCategory] = useState<string>("");
  const [showSpinner, setSpinner] = useState<boolean>(false);
  const [projectFetchError, setError] = useState<boolean | string>(false);

  useEffect(() => {
    setSpinner(true);
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
        setSpinner(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setSpinner(false);
      });

    return () => source.cancel("request cancled");
  }, [category]);

  return (
    <React.Fragment>
      <section id="dashboard" className={`pb-3 ${styles.dashboard}`}>
        <div className="row d-flex align-items-start justify-content-center m-3">
          <div className="container-lg col-md-5 border border-primary border-1 col-ms-8 rounded pb-3">
            <h4 className="text-primary lead text-start my-2 ms-2">
              <i className="bi bi-bookmarks fs-4 me-1"></i>Browse by Categories
            </h4>
            <div
              className="buttons d-flex flex-wrap justify-content-start"
              role="group"
            >
              {/* all category button (is seperate becuase we need empty id) */}
              <button
                id=""
                type="button"
                className={`btn btn-primary m-1 ${styles.button}`}
                onClick={(e: FormEvent) => setCategory(e.currentTarget.id)}
              >
                All projects
              </button>

              {categories?.map((category) => (
                <button
                  id={category.category}
                  type="button"
                  className="btn btn-primary m-1"
                  key={category._id}
                  onClick={(e: FormEvent) => setCategory(e.currentTarget.id)}
                >
                  {category.category}
                  <span className={`badge count ms-2 ${styles.count}`}>
                    {category.projectsCount}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className={`overflow-scroll col-md-6 border border-primary border-1 col-sm-8 rounded mt-md-0 mt-3 pb-3 ${styles.projects}`}
          >
            <h4 className="text-primary lead text-start my-2 ms-2">
              <i className="bi bi-clipboard-check fs-4 me-1"></i>my projects
            </h4>
            <div
              className="buttons d-flex justify-content-center align-items-center flex-column"
              role="group"
            >
              {showSpinner ? (
                <div
                  className="spinner-border text-primary mt-5"
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
                    <img
                      className="img-fluid"
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
