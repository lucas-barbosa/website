import * as React from "react";
import styles from "../../styles/home/counts.module.scss";

const CountsSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="counts" className={styles.counts}>
      <h2 className="mb-4 text-center">My development work</h2>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-3 col-md-6" data-aos="fade-right">
              <div className={styles.countBox}>
                <h6>STATES</h6>
                <h4>happy digital clients</h4>
                <span className={styles.span}>{process.env.clients_count}</span>
                <i className="bi bi-emoji-laughing"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0" data-aos="fade-up-right">
              <div className={styles.countBox}>
                <h6>STATES</h6>
                <h4>my achieved projects</h4>
                <span className={styles.span}>
                  {process.env.projects_count}
                </span>
                <i className="bi bi-journal-check"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-up-left">
              <div className={styles.countBox}>
                <h6>STATES</h6>
                <h4>coding years experiens</h4>
                <span className={styles.span}>
                  {process.env.coding_years_count}
                </span>
                <i className="bi bi-calendar2-week"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0" data-aos="fade-left">
              <div className={styles.countBox}>
                <h6>STATES</h6>
                <h4>offering digital tasks</h4>
                <span className={styles.span}>{process.env.docs_count}</span>
                <i className="bi bi-bag-check"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CountsSection;
