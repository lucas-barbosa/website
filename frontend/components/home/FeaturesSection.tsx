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
      <div className="row">
          <div className="col-md-6 col-sm-10 d-flex flex-column justify-content-start ps-5 pt-5">
            <p className='text-white lead'>digital service</p>
            <h3 className='text-white pt-2'>get you dream projects done with my digital services, superior products.</h3>
            <h3 className='text-white pt-4'>figure out the service products you want. and contact me in contacts section or social media links above.</h3>
            <div className="d-flex flex-row">
              <Link href="/services">
              <a className="get-started">Get started <i className="bi bi-arrow-right-short"></i></a>
              </Link>
              <Link href="/contacts">
              <a className="contact">contact us</a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block col-sm-10 d-flex align-self-end justify-self-end ps-5">
            <Image width="500" height="500" src="/images/digital-service.png"/>
          </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
