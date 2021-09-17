import React from "react";
import Image from "next/image";
import styles from "../../../styles/projects/dashboard/projects.module.scss";
import { Project } from "./index";

interface ProjectsTableProps {
  isPending: boolean;
  projectFetchError: boolean | string;
  projectsTableEl: object;
  curProjects: Project[];
  modalOpen: boolean;
  setCurSelectedProject: Function;
  close: () => void;
  open: () => void;
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({
  isPending,
  projectsTableEl,
  setCurSelectedProject,
  projectFetchError,
  curProjects,
  modalOpen,
  close,
  open,
}) => {
  const projectClickHanlder = (project: Project) => {
    setCurSelectedProject(project);
    modalOpen ? close() : open();
  };
  return (
    <div
      className={`overflow-scroll col-md-12 col-lg-6 rounded mt-md-0 mt-3 pb-3 ${styles.projects}`}
      ref={projectsTableEl}
    >
      <div className="d-flex align-items-center justify-content-center">
        <h4 className="text-start my-4 ms-2 fs-3">MY PROJECTS</h4>
      </div>
      <div
        className="buttons d-flex justify-content-center align-items-center flex-column"
        role="group"
      >
        {isPending ? (
          <div className="spinner-border text-dark mt-5" role="status" />
        ) : !projectFetchError ? (
          curProjects?.map((project) => (
            <button
              onClick={projectClickHanlder.bind(this, project)}
              className={`${styles.projectLink} my-2`}
              key={project._id}
            >
              <Image
                unoptimized={true}
                className="bg-white"
                width="690"
                height="190"
                loader={({ src }) => src}
                src={`https://gh-card.dev/repos/alguerocode/${project.repoName}.svg?fullname=`}
                alt={`alguero github repository : ${project.repoName}`}
              />
            </button>
          ))
        ) : (
          <div className="d-flex align-items-center justify-content-center flex-column">
            <i className="bi bi-exclamation-triangle-fill text-danger fs-1"></i>
            <p className="lead text-center text-danger">{projectFetchError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTable;
