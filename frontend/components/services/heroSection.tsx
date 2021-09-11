import React from "react";
import styles from "../../styles/services/hero.module.scss";

// components
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className={`${styles.intro} row justify-content-center pb-4`}>
        <h2>
          Find out the perfect digital services product for your business or{" "}
          <Link href="/contacts">
            <a>contact us</a>
          </Link>
        </h2>
        <div className="d-flex flex-row mt-4 justify-content-center align-items-center">
          <Link href="/services">
            <a
              className={`${styles.getStarted} d-flex flex-row justify-content-center ps-2`}
            >
              <p className="mt-2">Get started</p>{" "}
              <i className="bi bi-arrow-right-short fs-2 mt-2 text-black"></i>
            </a>
          </Link>
          <Link href="https://www.fiverr.com/alhashmicode" prefetch={false}>
            <a className={`${styles.fiverr} align-self-center ms-5`}>
              Fiverr profile
            </a>
          </Link>
        </div>
      </div>
      <div className={`${styles.tools} pt-3 ps-3`}>
            <h3>language and tools</h3>
        </div>
    </React.Fragment>
  );
};

export default HeroSection;
