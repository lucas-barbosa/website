import React, { FormEvent, useEffect } from "react";
import tippy from "tippy.js";

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

    // tooltip handler with (tippy.js)

    tippy(".subscribe", {
      content: "<h6 class='text-muted'> 💌🙂 subscribe to get updated when new things Released!</h6>",
      animation: "perspective-subtle",
      placement: "bottom",
      theme: "light",
      maxWidth:195,
      allowHTML:true,
      delay:[200, 0],
      hideOnClick:true,
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
              <a className="btn">
                <Image
                  src="/images/favicon.png"
                  width="65"
                  height="70"
                  alt="alhashmicode logo image"
                />
              </a>
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
                <Link href="/docs">
                  <a onClick={linksClickHandler} className="nav-link">
                    Documents
                  </a>
                </Link>
              </li>
              <li className="dropdown">
                <a className="nav-link">
                  <span>Socials</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a
                      href={process.env.github}
                      className="text-center"
                      target="_tab"
                    >
                      <div className="socials-link">
                        <i className="bi bi-github fs-5 px-1 text-dark"></i>{" "}
                        github
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={process.env.instagram}
                      className="text-center"
                      target="_tab"
                    >
                      <div className="socials-link">
                        <i className="bi bi-instagram fs-5 px-1 text-danger"></i>{" "}
                        instagram
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={process.env.discord}
                      target="_tab"
                    >
                      <div className="socials-link">
                        <i className="bi bi-discord fs-5 px-1 text-info"></i>{" "}
                        discord
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={process.env.facebook}
                      target="_tab"
                    >
                      <div className="socials-link">
                        <i className="bi bi-facebook fs-5 px-1 text-primary"></i>{" "}
                        facebook
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
