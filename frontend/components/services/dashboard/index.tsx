import React from "react";
import styles from "../../../styles/services/dashboard.module.scss";
import ComgingSoon from "../../coming-soon/comingSoon";

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <ComgingSoon />
    </React.Fragment>
  );
};

export default Dashboard;
