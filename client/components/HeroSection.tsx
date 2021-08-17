import * as React from "react";
// import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Elegant and creative solutions</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div className="d-flex buttons">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
                <a
                  href="#subscribe"
                  className="glightbox btn-watch-video"
                >
                  subscribe
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src="/images/intro.png"
                className="img-fluid animated"
                alt="hero development"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
