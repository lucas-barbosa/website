import * as React from "react";

// components
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alguerocde | Page Not Found 404</title>
      </Head>
      <div className="intro">
        <div className="d-flex flex-column  justify-content-center mx-3 align-items-center border border-2 border-start-0 border-top-0 border-end-0 pb-3">
          <Image
            src="/images/404.jpg"
            width="300"
            height="300"
            alt="alhashmicode Page Not Found Image"
          ></Image>
          <h1 className="text-center">404 Error</h1>
          <p className="text-muted text-center fs-5">
            We can&apos;t find the page you&apos;re looking for.
          </p>
          <Link href="/">
            <a className="btn btn-primary">Back to Home</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
