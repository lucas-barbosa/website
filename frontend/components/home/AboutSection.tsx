import React, { useEffect } from "react";
import tippy from "tippy.js";
import styles from "../../styles/home/about.module.scss";

// components
import Image from "next/image";
import Link from "next/link";
import CountsSection from "./CountsSection";

const FeatureSection: React.FC = () => {
  useEffect(() => {
    // tooltip shows when hover the card;
    tippy(`.${styles.link}`, {
      content:
        "<h6 class='text-muted'>👆👨🏻‍💻 Click here to see more about this feature</h6>",
      animation: "perspective-subtle",
      placement: "bottom-start",
      theme: "light",
      maxWidth: 180,
      allowHTML: true,
      delay: [100, 0],
      hideOnClick: true,
    });
  }, []);

  return (
    <React.Fragment>
      <section
        id="features"
        className={`${styles.about} container-lx d-flex justify-content-center row align-items-center`}
      >
        {/* digital service card */}
        <Link href="/">
          <a className={`${styles.card} card m-3 d-flex flex-column justify-content-between`} >
            <h5>API</h5>
            <h4>backend API service for fetching data</h4>
            <Image
              src="/images/api.png"
              width="262"
              height="175"
              alt="alguerocode backend api image"
            />
            <p>backend API</p>
          </a>
        </Link>
        {/* projects card */}
        <Link href="/">
          <a className={`${styles.card} card m-3 d-flex flex-column justify-content-between`}>
            <Image
              src="/images/web.png"
              width="262"
              height="175"
              alt="alguerocde website tools image"
            />
          </a>
        </Link>
        {/* blogs card */}
        <Link href="/">
          <a className={`${styles.card} card m-3 d-flex flex-column justify-content-between`}>
    
            <Image
              src="/images/npm.png"
              width="262"
              height="175"
              alt="alguerocde volder npm package image"
            />
          </a>
        </Link>
        {/*Count Component Section */}
        <CountsSection />
      </section>
    </React.Fragment>
  );
};

export default FeatureSection;
