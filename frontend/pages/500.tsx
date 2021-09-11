import * as React from "react";

// components
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ServerError: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguerocode | Internal server error</title>
      </Head>
      <div className="intro">
        <div className="d-flex flex-column  justify-content-center mx-3 align-items-center border border-2 border-start-0 border-top-0 border-end-0 pb-3">
          <Image
            src="/images/500.jpg"
            width="300"
            height="300"
            alt="alhashmicode 500 internal server error image"
          ></Image>
          <h1 className="text-center">500 Server Error</h1>
          <p className="text-muted text-center fs-5">
            oops, something went wronge.
            try to refresh this page or feel free to contact us if the problem is persists.
          </p>
          <Link href="/">
            <a className="btn btn-primary">Back to Home</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServerError;
