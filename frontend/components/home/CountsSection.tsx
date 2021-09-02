import * as React from "react";
import styles from "../../styles/home/counts.module.scss";

const CountsSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="counts" className={styles.counts}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={styles.countBox}>
                <i className={`bi bi-people-fill ${styles.icon}`}></i>
                <span className={styles.span}>{process.env.clients_count}</span>
                <p className={styles.paragraph}>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className={styles.countBox}>
                <i className={`bi bi-clipboard-check ${styles.icon}`}></i>
                <span className={styles.span}>{process.env.projects_count}</span>
                <p className={styles.paragraph}>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className={styles.countBox}>
                <i className={`bi bi-file-earmark-code ${styles.icon}`}></i>
                <span className={styles.span}>{process.env.coding_years_count}</span>
                <p className={styles.paragraph}>Year Of Coding</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className={styles.countBox}>
                <i className={`bi bi-journal-text ${styles.icon}`}></i>
                <span className={styles.span}>{process.env.docs_count}</span>
                <p className={styles.paragraph}>Documents</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CountsSection;
