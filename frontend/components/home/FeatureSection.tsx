import React,{useEffect} from "react";
import tippy from "tippy.js";
import styles from "../../styles/home/features.module.scss";

// components
import Image from "next/image";
import Link from "next/link";
import CountsSection from "./CountsSection";

const FeatureSection: React.FC = () => {
  useEffect(() =>{
    
    // tooltip shows when hover the card;
    tippy(`.${styles.link}`,{
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
        className={`${styles.features} container-lx  p-3 mt-2 d-flex justify-content-center row align-items-center`}
      >
        <div className={`${styles.header} text-center`}>
          <i className="bi bi-bookmark-star d-inline fs-1 p-2 text-primary"></i>
          <h1>Check our Features</h1>
          <p>
            Find out our most interesting about my features in last release!
          </p>
        </div>
        {/* digital service card */}
        <div className={`${styles.card} card m-3`}>
          <Image
            src="/images/digital-services.jpg"
            width="262"
            height="175"
            alt="alhashmicode image projects developer card"
          />
          <div className="card-body">
            <h5 className={styles.cardTitle}>Digital Services</h5>
            <p className="card-text text-muted">
              get you dream projects done, with my digital services, figure out
              the service you want.
            </p>
            <Link href="/services">
              <a className={`${styles.link} align-items-center justify-content-center`}>
                <div className="text">view page</div>
                <i className="bi bi-arrow-right-short features-icon"></i>
              </a>
            </Link>
          </div>
        </div>
        {/* projects card */}
        <div className={`${styles.card} card m-3`}>
          <Image
            src="/images/projects.jpg"
            width="262"
            height="175"
            alt="alhashmicode image digital servies developer"
          />
          <div className="card-body">
            <h5 className={styles.cardTitle}>Projects</h5>
            <p className="card-text text-muted">
              this page is about showing my projects that I finished up
              in my development work line.
            </p>
            <Link href="/projects">
              <a className={`${styles.link} align-items-center justify-content-center`}>
                <div className="text">view page</div>
                <i className="bi bi-arrow-right-short features-icon"></i>
              </a>
            </Link>
          </div>
        </div>
        {/* blogs card */}
        <div className={`${styles.card} card m-3`}>
          <Image
            src="/images/blogs.jpg"
            width="262"
            height="175"
            alt="alhashicode image blogs developer"
          />
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>Documents</h5>
            <p className="card-text text-muted">
              Find out my interesting docs I wrote about 
              programming and web development.
            </p>
            <Link href="/docs">
              <a className={`${styles.link} align-items-center justify-content-center`}>
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
