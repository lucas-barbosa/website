import React, { useEffect, useState } from "react";
import styles from "../../styles/coming-soon/coming-soon.module.scss";
import moment from "moment";

const ComingSoon: React.FC = () => {
  const [seconds, setSeconds] = useState(moment().seconds());
  const [minutes, setMinutes] = useState(moment().minutes());
  const [hours, setHours] = useState(moment().hours());
  const [days, setDays] = useState(moment().dayOfYear());

  useEffect(() => {
    const secId = setInterval(() => setSeconds(moment().seconds()), 1000);
    const minId = setInterval(() => setMinutes(moment().minutes()), 1000 * 60);
    const hourId = setInterval(() => setHours(moment().hours()), 1000 * 60 * 60);
    const dayId = setInterval(() => setDays(moment().dayOfYear()),1000 * 60 * 60 * 24);
    
    return () =>{
      clearInterval(secId);
      clearInterval(minId);
      clearInterval(hourId);
      clearInterval(dayId);
    }
  }, []);

  return (
    <React.Fragment>
      <div className={`${styles.intro}`}>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-center mt-3">Coming Soon</h1>

          <h2 className={`${styles.subTitle} text-center`}>
            this feature is under development construction, subscribe to get
            updated when new things get released!
          </h2>

          <div className="d-flex flex-row justify-content-center align-items-center">
            <div className={`${styles.clock} bg-white ms-3 p-2`}>
              <p className="text-center fs-5">DAY</p>
              <span className="fs-4 px-md-3 p-sm-0 text-center">{days}</span>
            </div>

            <div className={`${styles.clock} bg-white ms-3 p-2`}>
              <p className="text-center fs-5">HOUR</p>
              <span className="fs-4 px-md-3 p-sm-0 text-center">{hours}</span>
            </div>

            <div className={`${styles.clock} bg-white ms-3 p-2`}>
              <p className="text-center fs-5">MIN</p>
              <span className=" fs-4 px-md-3 p-sm-0 text-center">
                {minutes}
              </span>
            </div>

            <div className={`${styles.clock} bg-white ms-3 p-2`}>
              <p className="text-center fs-5">SEC</p>
              <span className="fs-4 px-md-3 p-sm-0 text-center">{seconds}</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComingSoon;
