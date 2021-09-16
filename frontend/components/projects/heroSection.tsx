import React from "react";
import styles from "../../styles/projects/hero.module.scss";

// components
import Image from "next/image";
import Link from "next/link";

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
              <a className="btn btn-view btn-primary text-white fs-5 m-1 p-2 px-3 lead">
                view projects
                <i className="bi bi-arrow-right-short m-1 fs-5"></i>
              </a>
            </Link>
            <Link href={`${process.env.github}`}>
              <a
                className="btn btn-github  btn-primary text-white m-1 fs-5 p-2 px-3 lead ms-0 ms-md-3"
                target="_tab"
              >
                <i className="bi bi-github m-1 fs-5"></i> Github profile
              </a>
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
              width="300"
              height="170"
              unoptimized={true}
              loader={({ src }): string => src}
              src={`${process.env.language_states}`}
              alt="alguerocode github most language states, image"
            />
            <Image
              width="360"
              height="170"
              unoptimized={true}
              className="mx-2"
              loader={({ src }): string => src}
              src={`${process.env.github_states}`}
              alt="alguerocode github states, image"
            />
            <Image
              width="360"
              height="170"
              unoptimized={true}
              className="mx-2"
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
