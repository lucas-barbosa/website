import * as React from "react";

// components
import Image from "next/image";
import Link from "next/link";

const FeatureSection: React.FC = () => {
  return (
    <React.Fragment>
      <section
        id="features"
        className="container-lx  p-3 m-0 d-flex justify-content-center row align-items-center"
      >
        <div className="features-header text-center">
          <i className="bi bi-bookmark-star d-inline fs-1 p-2 text-primary"></i>
          <h1>Check our Features</h1>
          <p>
            Find out our most interesting about my features in last release!
          </p>
        </div>
        {/* digital service card */}
        <div className="card features-card m-3">
          <Image
            src="/images/digital-services.jpg"
            width="262"
            height="175"
            alt="alhashmicode image projects developer card"
          />
          <div className="card-body">
            <h5 className="card-title">Digital Services</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <Link href="/services">
              <a className="page-link align-items-center justify-content-center">
                <div className="text">view page</div>
                <i className="bi bi-arrow-right-short features-icon"></i>
              </a>
            </Link>
          </div>
        </div>
        {/* projects card */}
        <div className="card features-card m-3">
          <Image
            src="/images/projects.jpg"
            width="262"
            height="175"
            alt="alhashmicode image digital servies developer"
          />
          <div className="card-body">
            <h5 className="card-title">Projects</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <a href="#" className="page-link align-items-center justify-content-center">
              <div className="text">view page</div>
              <i className="bi bi-arrow-right-short features-icon"></i>
            </a>
          </div>
        </div>
        {/* blogs card */}
        <div className="card features-card m-3">
          <Image
            src="/images/blogs.jpg"
            width="262"
            height="175"
            alt="alhashicode image blogs developer"
          />
          <div className="card-body">
            <h5 className="card-title">Blogs</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <a href="#" className="page-link align-items-center justify-content-center">
              <div className="text">view page</div>
              <i className="bi bi-arrow-right-short features-icon"></i>
            </a>
          </div>
        </div>
        {/*Count Component Section */}
      </section>
    </React.Fragment>
  );
};

export default FeatureSection;
