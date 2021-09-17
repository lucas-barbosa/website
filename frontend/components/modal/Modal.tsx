import React from "react";
import styles from "../../styles/modal/modal.module.scss";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { Project } from "../projects/dashboard/index";
import Image from "next/image";

interface ModalProps {
  handleClose: () => void;
  curSelectedProject: Project | null;
}
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "50vh",
    opacity: 0,
  },
};
const Modal: React.FC<ModalProps> = ({ handleClose, curSelectedProject }) => {
  return (
    <Backdrop handleClose={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modal} d-flex flex-column justify-content-between border border-3 border-dark`}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {curSelectedProject && (
          <React.Fragment>
            <h2 className={styles.title}>{curSelectedProject.title}</h2>
            <Image
              unoptimized={true}
              className="bg-white border border-3 border-dark"
              width="700"
              height="190"
              loader={({ src }) => src}
              src={`https://gh-card.dev/repos/alguerocode/${curSelectedProject.repoName}.svg?fullname=`}
              alt={`alguero github repository : ${curSelectedProject.repoName}`}
            />
            <div
              className={
                "d-flex flex-row flex-wrap justify-content-center align-items-center"
              }
            >
              {curSelectedProject.categories.map((category) => (
                <div className={styles.category}>#{category}</div>
              ))}
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
              <button onClick={handleClose}>close</button>
              <a
                href={`${process.env.github}/${curSelectedProject.repoName}`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i className="bi bi-github m-1 fs-5"></i>view in github
              </a>
            </div>
          </React.Fragment>
        )}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
