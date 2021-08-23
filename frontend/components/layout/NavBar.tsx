import React, { FormEvent, useEffect } from "react";

//components
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  useEffect(() => {
    // dropdown mobile nav;

    const selectDropdownEl = document.querySelectorAll(".navbar .dropdown > a");
    const toggleDropDownHanlder = (e: FormEvent) => {
      if (
        document.querySelector("#navbar")?.classList.contains("navbar-mobile")
      ) {
        e.preventDefault();
        e.currentTarget.nextElementSibling?.classList.toggle("dropdown-active");
      }
    };
    selectDropdownEl.forEach((e: any) => {
      e.addEventListener("click", toggleDropDownHanlder);
    });
  }, []);

  // click handler for mobile navigation;

  const linksClickHandler = (e: FormEvent) => {
    let navbar = document.querySelector<HTMLElement>("#navbar");
    if (navbar?.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      let navbarToggle =
        document.querySelector<HTMLElement>(".mobile-nav-toggle");
      navbarToggle?.classList.toggle("bi-list");
      navbarToggle?.classList.toggle("bi-x");
    }
  };
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
                  <a onClick={linksClickHandler} className="nav-link">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a onClick={linksClickHandler} className="nav-link">
                    Digtal Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a onClick={linksClickHandler} className="nav-link">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a onClick={linksClickHandler} className="nav-link">
                    Blogs
                  </a>
                </Link>
              </li>
              <li className="dropdown">
                <a className="nav-link">
                  <span>Socials</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="https://github.com/alhashmicode" className="text-center" target="_tab">
                      <div className="socials-link">
                         <i className="bi bi-github fs-5 px-1 text-dark"></i> github
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/alhashmicode" className="text-center" target="_tab">
                      <div className="socials-link">
                        <i className="bi bi-instagram fs-5 px-1 text-danger"></i> instagram
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.com/channels/879049803043053589/879049803550572645" target="_tab">
                      <div className="socials-link">
                        <i className="bi bi-discord fs-5 px-1 text-info"></i> discord
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/salah.alhashmi.52" target="_tab">
                      <div className="socials-link">
                        <i className="bi bi-facebook fs-5 px-1 text-primary"></i> facebook
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/#contact">
                  <a
                    onClick={linksClickHandler}
                    className="nav-link link scrollto"
                    href="#contact"
                  >
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#subscribe">
                  <a onClick={linksClickHandler} className="subscribe">
                    subscribe
                  </a>
                </Link>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={(e: FormEvent) => {
                document
                  .querySelector("#navbar")
                  ?.classList.toggle("navbar-mobile");
                e.currentTarget.classList.toggle("bi-list");
                e.currentTarget.classList.toggle("bi-x");
              }}
            ></i>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;