import React, { useState } from "react";
import type { ProjectsProps } from "../../pages/projects";
import { API } from "../../api/axios";


const Dashboard: React.FC<ProjectsProps> = ({ categories, projects }) => {
  const [curProjects, setCurProjects] = useState(projects);
  const [showSpinner, setSpinner] = useState(false);

  const getProjectsByCategoryHandler = async (e: React.FormEvent) => {
    try {

      setSpinner(true);
      const headers = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      });
      const res = await API.get(`/projects/${e.currentTarget.id}`, { headers });
      setSpinner(false);
      setCurProjects(res.data);

    } catch (error) {

      setSpinner(false);
      setCurProjects(projects);
      console.log(error.message);

    }
  };

  return (
    <React.Fragment>
      <section id="dashboard" className="pb-3">
        <div className="row d-flex align-items-start justify-content-center m-3">
          <div className="container-lg col-md-5 border border-primary border-1 col-ms-8 rounded pb-3">
            <h4 className="text-primary lead text-start my-2 ms-2">
              <i className="bi bi-bookmarks fs-4 me-1"></i>Browse by Categories
            </h4>
            <div
              className="buttons d-flex flex-wrap justify-content-start"
              role="group"
            >
              <button id="" type="button" className="btn btn-primary m-1" onClick={getProjectsByCategoryHandler}>
                All projects
              </button>

              {categories?.map((category) => (
                <button
                  id={category.category}
                  type="button"
                  className="btn btn-primary m-1"
                  key={category._id}
                  onClick={getProjectsByCategoryHandler}
                >
                  {category.category}
                  <span className="badge count-span ms-2">
                    {category.projectsCount}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-scroll col-md-6 border border-primary border-1 col-sm-8 rounded mt-md-0 mt-3 pb-3 my-projects">
            <h4 className="text-primary lead text-start my-2 ms-2">
              <i className="bi bi-clipboard-check fs-4 me-1"></i>my projects
            </h4>
            <div
              className="buttons d-flex justify-content-center align-items-center flex-column"
              role="group"
            >
              {showSpinner ? (
                <div className="spinner-border text-primary mt-5" role="status"/>
              ) : (
                curProjects?.map((project) => (
                  <a
                    href={`https://github.com/alguerocode/${project.repoName}`}
                    className="github-link"
                    target="_blank"
                    key={project._id}
                  >
                    <img
                      className="img-fluid"
                      src={`https://gh-card.dev/repos/alguerocode/${project.repoName}.svg`}
                    />
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
