import React from "react";

const CountsSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span className="purecounter">0</span>
              <p>Clients</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span className="purecounter">100+</span>
              <p>Projects</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span className="purecounter">1</span>
              <p>Blogs</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span className="purecounter">0</span>
              <p>Services</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CountsSection;
