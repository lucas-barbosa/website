import React from "react";
import styles from "../../styles/docs/hero.module.css";

const ComingSoon: React.FC = () => {
  return (
    <React.Fragment>
      <div className={`${styles.intro}`}>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h3 className="text-center display-3 text-white mt-3">Coming Soon</h3>

          <p className={`${styles.subTitle} text-center lead`}>
        	this feature is under construction
          </p>

          <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="bg-white ms-3 text-dark lead border rounded p-3">
              <span>35</span>
              <span>Days</span>
            </div>

            <div className="bg-white ms-3 text-dark lead border rounded p-3">
              <span>17</span>
              <span>Hours</span>
            </div>

            <div className="bg-white ms-3 text-dark lead border rounded p-3">
              <span >50</span>
              <span>Minutes</span>
            </div>

            <div className="bg-white ms-3 text-dark lead border rounded p-3">
              <span>39</span>
              <span>Seconds</span>
            </div>
          </div>

          <button
            className="btn btn-outline-danger fs-4 mt-4"
          >
            Follow us for update now!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComingSoon;