import React from "react";

// components
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      {/* header */}
      <div className="projects-intro">
        <header className="header">
          <h1 className="display-6 text-center text-white mt-3 p-1">
            welcome to my github projects
          </h1>
          <p className="lead sub-title text-center">
            showing my projects that I finished up in my development work line.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <a
              className="btn btn-view btn-warning text-white fs-4 m-1 mb-3 p-2 lead"
              href="#dashboard"
            >
              view projects<i className="bi bi-arrow-right-short m-1 fs-5"></i>
            </a>
            <a
              className="btn btn-github  btn-warning text-white m-1 mb-3 fs-5 p-2 px-3 lead"
              target="_tab"
              href={process.env.github}
            >
              <i className="bi bi-github m-1 fs-4"></i> Github profile
            </a>
          </div>
        </header>
        <div className="row">
          <div className="col container-lg justify-content-center align-items-center d-flex flex-wrap">
            <Image
              width="320"
              height="170"
              unoptimized={true}
              className="status-img z-index-2"
              loader={({src}):string => src}
              src={process.env.language_states}
              alt="alguerocode github most language states, image"
            />
            <Image
              width="380"
              height="170"
              unoptimized={true}
              className="status-img ms-2"
              loader={({src}):string => src}
              src={process.env.github_states}
              alt="alguerocode github states, image"
            />
            <Image
              width="380"
              height="170"
              unoptimized={true}
              className="ms-2 status-img"
              loader={({src}):string => src}
              src={process.env.streak_states}
              alt="alguerocode github streak states, image"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
