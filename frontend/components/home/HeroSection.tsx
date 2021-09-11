import React, { useEffect } from "react";
import tippy from "tippy.js";
import styles from "../../styles/home/hero.module.scss";

// components
import Image from "next/image";

const HeroSection: React.FC = () => {
  useEffect(() => {
    tippy(".home-image", {
      content: "alguero development image 👨🏻‍💻",
      theme: "light",
    });
  });
  return (
    <React.Fragment>
      <section
        id="hero"
        className={`d-flex align-items-center intro ${styles.hero}`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className={styles.header}>
                Build <span>your dream</span> projects and skills faster
              </h1>
              <h2 className={styles.subHeader}>
                Welcome to my personal website ,I am Alguero full stack web
                developer
              </h2>
              <div className={`d-flex ${styles.buttons}`}>
                <a
                  href="#features"
                  className={`${styles.getStarted} justify-content-start align-items-center`}
                >
                  <div>Get Started</div>
                  <i
                    className={`bi bi-arrow-right-short fs-2 ${styles.icon}`}
                  ></i>
                </a>
                <a href="#subscribe" className={`${styles.subscribe}`}>
                  subscribe
                </a>
              </div>
            </div>
            <div
              className={`col-lg-6 order-1 order-lg-2 align-item-center justify-content-end d-flex ${styles.heroImg}`}
            >
              <Image
                width="430"
                height="400"
                src="/images/hero.png"
                className="img-fluid home-image"
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
