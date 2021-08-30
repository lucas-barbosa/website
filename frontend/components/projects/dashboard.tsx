import React from "react";

// components
import Head from "next/head";

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
        <Head>
            <link rel="stylesheet" href="/styles/projects/dashboard.css" />
        </Head>
      <section id="dashboard" className="display-3 text-center text-primary">dashboard</section>
    </React.Fragment>
  );
};

export default Dashboard;
