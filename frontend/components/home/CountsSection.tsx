import * as React from "react";

const CountsSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-people-fill"></i>
                <span className="purecounter">1</span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-clipboard-check"></i>
                <span className="purecounter">100+</span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-file-earmark-code"></i>
                <span className="purecounter">2</span>
                <p>Year Of Coding</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-journal-text"></i>
                <span className="purecounter">1</span>
                <p>Documents</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CountsSection;
