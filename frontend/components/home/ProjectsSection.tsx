import React from "react";
import styles from "../../styles/home/projects.module.scss";

// components
import Image from "next/image";
import Link from "next/link";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="row justify-content-xl-end">
        <div className="col-md-5 col-sm-10 d-flex flex-column justify-content-start ps-5 pt-5 ms-xl-5">
          <p className={`${styles.title} lead`}>Projects</p>
          <h3 className="pt-2">this page is about showing my</h3>
          <ul>
            <li className="text-muted fs-4 mt-3">
              intersting projects that I made
            </li>
            <li className="text-muted fs-4 mt-3">
              skills that i get in my career
            </li>
            <li className="text-muted fs-4 mt-3">github acount states</li>
          </ul>
          <div className="d-flex flex-row mt-4">
            <Link href="/projects">
              <a
                className={`${styles.viewPage} d-flex flex-row justify-content-center ps-2`}
              >
                <p className="mt-2">view page</p>
                <i className="bi bi-arrow-right-short fs-2 mt-1 text-black me-3"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className={`${styles.blocks} col-md-5 col-sm-12 d-flex flex-column mt-5 ms-4 me-lg-5`}>
          <Link href={`${process.env.github} `}>
            <a
              className={`${styles.github} d-flex flex-column justify-content-center align-items-center`}
            >
              <Image
                src="/images/github.png"
                className="mt-1"
                width="350"
                height="90"
                alt="alguerocode github profile logo image"
              />
              <p className="mt-1 fs-4">Show github profile</p>
            </a>
          </Link>
          <div className="d-flex mt-3 flex-column flex-lg-row">
            <div className={`${styles.box} me-0 me-lg-2`}>
              <h6>SKILLS</h6>
              <h4 className="fs-5">
                Hello I am full stack web develper, master javascript
                language
              </h4>
            </div>
            <div className={`${styles.box} ms-0 ms-lg-2 mt-3 mt-lg-0`}>
              <h6>SKILLS</h6>
              <h4>
                my favorite web development stack is MERN: (mongoDB, expressJS,
                reactJS, nodeJS)
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
