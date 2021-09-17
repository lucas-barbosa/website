import React from "react";
import styles from "../../../styles/services/dashboard.module.scss";

const Dashboard: React.FC = () => {
    return (
        <React.Fragment>
            <div className={`${styles.intro} row bg-danger text-center`}>
            <i className="bi bi-exclamation-triangle display-1 text-white"></i>
                <h4 className="text-white text-center px-5 mt-4">digital services under construction contact us for any questions</h4>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;