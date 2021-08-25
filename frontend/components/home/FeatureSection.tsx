import React,{useEffect} from "react";
import tippy from "tippy.js";


// components
import Image from "next/image";
import Link from "next/link";
import CountsSection from "./CountsSection";

const FeatureSection: React.FC = () => {
  useEffect(() =>{
    
    // tooltip shows when hover the card;
    tippy(".page-link",{
      content: "<h6 class='text-muted'>👆👨🏻‍💻 Click here to see more about this feature</h6>",
      animation: "perspective-subtle",
      placement: "bottom-start",
      theme: "light",
      maxWidth:180,
      allowHTML:true,
      delay:[100, 0],
      hideOnClick:true,
    })
  },[])

  return (
    <React.Fragment>
      <section
        id="features"
        className="container-lx  p-3 mt-2 d-flex justify-content-center row align-items-center"
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
            <p className="card-text text-muted">
              get you dream projects done, with my digital services, figure out
              the service you want.
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
            <p className="card-text text-muted">
              this page is about showing my projects that I finished up
              in my development work line.
            </p>
            <Link href="/projects">
              <a className="page-link align-items-center justify-content-center">
                <div className="text">view page</div>
                <i className="bi bi-arrow-right-short features-icon"></i>
              </a>
            </Link>
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
            <h5 className="card-title">Documents</h5>
            <p className="card-text text-muted">
              Find out my interesting documents I wrote about 
              programming web development and technologies.
            </p>
            <Link href="/docs">
              <a className="page-link align-items-center justify-content-center">
                <div className="text">view page</div>
                <i className="bi bi-arrow-right-short features-icon"></i>
              </a>
            </Link>
          </div>
        </div>
        {/*Count Component Section */}
        <CountsSection />
      </section>
    </React.Fragment>
  );
};

export default FeatureSection;
