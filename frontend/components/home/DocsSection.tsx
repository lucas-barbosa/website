import React from "react";
import styles from "../../styles/home/docs.module.scss";

// components
import Link from "next/link";
import Image from "next/image";

const DocsSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="documents" className={styles.documents}>
        <div className="row">
          <div className="col-md-6 col-sm-10 d-flex flex-column justify-content-center align-items-center ps-5 pt-4">
           <Image src="/images/documents.png" height="400" width="400" alt="alguerocode vectro image for documents section"/>
          </div>
          <div className="col-md-6 col-sm-10 d-flex flex-column pt-5 ms-sm-4 ms-md-0 ps-5 justify-content-xl-center">
              <p className="lead">documents</p>
              <h1 className="mb-4">coming soon!</h1>
               <h5>
               this feature is under development construction, subscribe to get updated when new things get released!
               </h5>
               <div className="d-flex justify-content-start align-items-center flex-row mt-5 ms-2">
                   <Link href="/docs">
                       <a className={styles.viewPage}>
                           view page
                       </a>
                   </Link>
                   <Link href="/#subscribe">
                        <a className={styles.subscribe}>subscribe</a>
                   </Link>
               </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DocsSection;
