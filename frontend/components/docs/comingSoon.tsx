import React, { useEffect, useState } from "react";
import styles from "../../styles/docs/hero.module.scss";
import moment from "moment";

const ComingSoon: React.FC = () => {
	const [seconds, setSeconds] = useState(moment().seconds());
	const [minutes, setMinutes] = useState(moment().minutes());
	const [hours, setHours] = useState(moment().hours());
	const [days, setDays] = useState(moment().dayOfYear());
	
	useEffect(() => {
		setInterval(() => setSeconds(moment().seconds()),1000);	
		setInterval(() =>setMinutes(moment().minutes()),1000 * 60);	
		setInterval(() => setHours(moment().hours()),1000 * 60 * 60);	
		setInterval(() => setDays(moment().dayOfYear()),1000 * 60 * 60 * 24);	
	},[])

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
              <span className="me-2 bg-warning text-white p-2 px-3 border rounded border-0">{days}</span>
              <span>Days</span>
            </div>

            <div className="bg-white ms-3 text-dark lead border rounded p-3">
              <span className="me-2 bg-warning text-white p-2 px-3 border rounded border-0">{hours}</span>
              <span>Hours</span>
            </div>

            <div className="bg-white ms-3 text-dark lead border rounded p-3">
              <span className="me-2 bg-warning text-white p-2 px-3 border rounded border-0">{minutes}</span>
              <span>Minutes</span>
            </div>

            <div className="bg-white ms-3 text-dark lead border rounded p-3">
              <span className="me-2 bg-warning text-white p-2 px-3 border rounded border-0">{seconds}</span>
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