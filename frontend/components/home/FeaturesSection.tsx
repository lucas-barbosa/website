import React from "react";
import styles from "../../styles/home/features.module.scss";

// components
import Image from "next/image";
import Link from "next/link";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="d-flex align-items-center justify-content-center">
        <i className="bi bi-bookmark-star fs-1 me-2 mb-2 text-white"></i>
        <h1 className="text-center">Check our Features</h1>
      </div>
      <div className="row justify-content-between justify-content-lg-center">
        <div className="col-md-6 col-12 col-lg-4 col-xxl-3 d-flex flex-column justify-content-center justify-content-md-startpe-5 ps-5  pe-5 pe-md-0 ps-5 pt-4">
          <p className="text-white lead text-center text-md-start">
            digital service
          </p>
          <h3 className="text-white pt-2 text-center text-md-start fs-4">
            get your dream project done with my digital services, superior
            products.
          </h3>
          <h3 className="text-white pt-4 text-center text-md-start fs-4">
            figure out the service products you want. and contact me in contacts
            section or or send me message by social media links an above.
          </h3>
          <div className="d-flex flex-row mt-5 justify-content-center justify-content-md-start align-items-end">
            <Link href="/services">
              <a
                className={`${styles.getStarted} d-flex flex-row justify-content-center ps-2 `}
              >
                <p className="mt-2">Get started</p>
                <i className="bi bi-arrow-right-short fs-2 mt-2 text-black"></i>
              </a>
            </Link>
            <Link href="/contacts">
              <a className={`${styles.contact} align-self-center ms-4`}>
                contact me
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-6  col-12 d-md-block col-sm-12 pt-4">
          <div className="row justify-content-center">
          <p className="text-white lead text-center text-md-start col-12 col-lg-7">
            Some of my tools
          </p>
          </div>
          <div className="row justify-content-center justify-content-md-start justify-content-lg-center align-items-between">
            <div className="col-8 d-flex justify-content-around">
              <Image
                src="/images/tools/javascript.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/css-3.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/nodejs.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/html-5.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
            </div>
            <div className="col-8 d-flex justify-content-around mt-5">
              <Image
                src="/images/tools/git.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/mongodb.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/bootstrap.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/jest.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
            </div>
            <div className="col-8 d-flex justify-content-around mt-5">
              <Image
                src="/images/tools/postgresql.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/react.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/sass.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
              <Image
                src="/images/tools/typescript.svg"
                width="90"
                height="90"
                className="ps-3"
                alt="svg image , alguerocode dvelopment svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
