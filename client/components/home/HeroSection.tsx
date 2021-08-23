import * as React from "react";
// import Image from "next/image";


const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Build your dream projects and skill faster</h1>
              <h2>
                Welcome to my personal website,I am alhashmicode full stack web developer
              </h2>
              <div className="d-flex buttons">
                <a href="#features" className="btn-get-started scrollto align-items-center justify-content-center">
                   <div className="text">Get Started</div><i className="bi bi-arrow-right-short hero-icon"></i>
                </a>
                <a
                  href="#subscribe"
                  className="subscribe btn text-primary"
                >
                  subscribe
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src="/images/hero.svg"
                className="img-fluid"
                alt="alhashmicode hero section, development vector image"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
