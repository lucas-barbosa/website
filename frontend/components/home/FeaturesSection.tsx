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
        <h2 className="text-center">Check our Features</h2>
      </div>
      <div className="row">
          <div className="col-6">
            <p className='text-white'>digital service</p>
            <h5 className='text-white'>get you dream projects done with my digital services, superior products</h5>
            <h5 className='text-white'>figure out the service products you want. and contact me in contacts section or social media links above</h5>
            <div className="d-flex flex-row">
              <Link href="/services">
              <a className="btn btn-primary">test</a>
              </Link>
              <Link href="/contacts">
              <a className="btn btn-primary">test</a>
              </Link>
            </div>
          </div>
          <div className="col-6 align-self-end">
            <Image width="450" height="450" src="/images/digital-service.png"/>
          </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
