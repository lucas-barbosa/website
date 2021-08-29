import React from "react";

// components
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className="projects-intro">
        <div className="header">
          <h1 className="display-6 text-center mt-3">welcome to my github projects</h1>
          <p className="lead text-secondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit!</p>
          <div className="d-flex justify-content-center align-items-center">
            <a className="btn btn-primary m-1" href="#dashboard">view projects<i className="bi bi-arrow-right-short m-1"></i></a>
            <a className="btn btn-outline-primary m-1" target="_tab" href={process.env.github}><i className="bi bi-github m-1"></i> github profile</a>
          </div>
        </div>
        <div className="row">
          <div className="col container-lg justify-content-center align-items-center d-flex flex-wrap">
            <Image
              width="320"
              height="170"
              className="status-img z-index-2"
              loader={() => process.env.language_states}
              src={process.env.language_states}
              alt="alguerocode github most language status image"
            />
            &nbsp;
            <Image
              width="380"
              height="170"
              className="status-img"
              loader={() => process.env.github_states}
              src={process.env.github_states}
              alt="alguerocode github status image"
            />
            <Image
              width="380"
              height="170"
              className="ms-1 status-img"
              loader={() => process.env.streak_states}
              src={process.env.streak_states}
              alt="alguerocode github streak status image"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
