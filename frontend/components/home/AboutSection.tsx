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
    tippy(`.${styles.card}`, {
      content:
        "<h6 class='text-muted'>👆👨🏻‍💻 Click here to see more about this</h6>",
      animation: "perspective-subtle",
      placement: "top",
      theme: "light",
      maxWidth: 200,
      allowHTML: true,
      delay: [400, 0],
      hideOnClick: true,
    });
  }, []);

  return (
    <React.Fragment>
      <section
        id="about"
        className={`${styles.about} container-lx d-flex justify-content-center row align-items-center`}
      >
        {/* digital service card */}
        <Link href="/">
          <a
            className={`${styles.card} card m-3 d-flex flex-column justify-content-between align-items-center`}
          >
            <h6 className="align-self-start">API</h6>
            <h4>backend API service for fetching data</h4>
            <Image
              src="/images/api.png"
              width="200"
              height="200"
              alt="alguerocode backend api image "
            />
            <p className="align-self-end mt-3">backend API</p>
          </a>
        </Link>
        {/* projects card */}
        <Link href="/">
          <a
            className={`${styles.card} card m-3 d-flex flex-column justify-content-between align-items-center`}
          >
            <h6 className="align-self-start">WEB</h6>
            <h4>expolore tools to push your projects build</h4>
            <Image
              src="/images/web.png"
              width="200"
              height="200"
              alt="alguerocde website tools image"
            />
            <p className="align-self-end mt-3">explore tools</p>
          </a>
        </Link>
        {/* blogs card */}
        <Link href="/">
          <a
            className={`${styles.card} card m-3 d-flex flex-column justify-content-between align-items-center`}
          >
            <h6 className="align-self-start">NPM</h6>
            <h4 className="">volder npm package for object validator and middleware</h4>
            <Image
              src="/images/npm.png"
              width="200"
              height="200"
              alt="alguerocde volder npm package image"
            />
            <p className="align-self-end mt-3">npm package</p>
          </a>
        </Link>
        {/*Count Component Section */}
        <h2 className="ms-5 mt-md-3 mt-lg-0 mb-4 ps-5 text-sm-center text-md-start text-lx-center">our development work</h2>
        <CountsSection />
      </section>
    </React.Fragment>
  );
};

export default FeatureSection;
