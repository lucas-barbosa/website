import React from "react";
import styles from "../../../styles/projects/hero.module.scss";

// components
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      {/* header */}
      <div className={styles.intro}>
        <header className="header">
          <h1 className="display-6 text-center text-white mt-3 p-1 px-5">
            welcome to my github projects
          </h1>
          <p className={`lead text-center px-5 ${styles.subTitle}`}>
            showing my projects that I finished up in my development work line.
          </p>
          <div className="d-flex justify-content-center align-items-center mb-3 my-0 my-md-5">
            <Link href="#dashboard" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-view btn-primary text-white fs-5 m-1 p-2 px-3 lead"
              >
                view projects
                <i className="bi bi-arrow-right-short m-1 fs-5"></i>
              </motion.button>
            </Link>
            <Link href={`${process.env.github}`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-github  btn-primary text-white m-1 fs-5 p-2 px-3 lead ms-0 ms-md-3"
              >
                <i className="bi bi-github m-1 fs-5"></i> Github profile
              </motion.button>
            </Link>
          </div>
        </header>
        <div className="row">
          <div className="col container-lg justify-content-center align-items-center d-flex flex-wrap">
            {/*add quotes to src attribute to ignore  
               type checking when i deploy to vercel.
               `${something}`
            */}
            <Image
              width="350"
              height="220"
              unoptimized={true}
              className="px-md-1"
              loader={({ src }): string => src}
              src={`${process.env.language_states}`}
              alt="alguerocode github most language states, image"
            />
            <Image
              width="420"
              height="220"
              className="px-2 px-md-1"
              unoptimized={true}
              loader={({ src }): string => src}
              src={`${process.env.github_states}`}
              alt="alguerocode github states, image"
            />
            <Image
              width="420"
              height="220"
              unoptimized={true}
              className="px-2 px-md-1"
              loader={({ src }): string => src}
              src={`${process.env.streak_states}`}
              alt="alguerocode github streak states, image"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
