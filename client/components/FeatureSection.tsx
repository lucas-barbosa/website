import * as React from "react";

const FeatureSection: React.FC = () => {
  return (
    <React.Fragment>
        <section id="features" className="container-lx bg-light p-3 m-0 d-flex justify-content-center row align-items-center">
            {/* digital service card */}
          <div className="card features-card  text-center">
            <img src="/images/digital-service.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* projects card */}
          <div className="card features-card  text-center">
            <img src="/images/blogs.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* blogs card */}
          <div className="card features-card  text-center">
            <img src="/images/projects.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </section>
    </React.Fragment>
  );
};

export default FeatureSection;
