import React from "react";
import styles from "../../styles/services/hero.module.scss";

// components
import Link from "next/link";
import Image from "next/image";

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
              className={`${styles.getStarted} d-flex flex-row justify-content-center ps-3`}
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
            <div className={`${styles.images} d-flex flex-wrap flex-row justify-content-start align-items-center pb-2`}>
                <Image src="/images/tools/git.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/bootstrap.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/css-3.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/html-5.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/express.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/heroku.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/javascript.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/jest.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/mongodb.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/nextjs.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/nodejs.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/postgresql.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/react.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/sass.svg" width="70" height="70" className="ps-3" />
                <Image src="/images/tools/typescript.svg" width="70" height="70" className="ps-3" />
            </div>
        </div>
    </React.Fragment>
  );
};

export default HeroSection;
