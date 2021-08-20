import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <React.Fragment>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link href="/">
              <div className="btn">
                <Image src="/images/favicon.png" width="65" height="70" />
              </div>
            </Link>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li key={1}>
                <Link href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li key={2}>
                <Link href="/services">
                  <a className="nav-link">Digtal Services</a>
                </Link>
              </li>
              <li key={3}>
                <Link href="/projects">
                  <a className="nav-link">Projects</a>
                </Link>
              </li>
              <li key={4}>
                <Link href="/blogs">
                  <a className="nav-link">Blogs</a>
                </Link>
              </li>
              <li key={5}>
                <Link href="/#about">
                  <a className="nav-link scrollto" href="#about">
                    About
                  </a>
                </Link>
              </li>
              <li key={6}>
                <Link href="/#contact">
                  <a className="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </Link>
              </li>
              <li key={7}>
                <Link href="#subscribe">
                  <a className="subscribe scrollto" href="#subscribe">
                    subscribe
                  </a>
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
