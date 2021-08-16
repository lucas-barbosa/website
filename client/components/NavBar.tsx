import * as React from "react";

const NavBar: React.FC = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
        <a className="navbar-brand" href="#">
          Offcanvas navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          ...
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
