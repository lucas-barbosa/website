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
              <li>
                <Link href="/">
                  <a className="nav-link scrollto active">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/digtal-service">
                  <a className="nav-link scrollto">Digtal Services</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="nav-link scrollto">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a className="nav-link scrollto">Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="nav-link scrollto" href="#about">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
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
